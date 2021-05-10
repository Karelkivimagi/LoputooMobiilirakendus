import React from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles/SearchBarStyles";
import AlbumsAsColumn from "../AlbumsAsColumn";
import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../../src/graphql/queries";

const SearchBar = () => {
  const [insertField, setInsertField] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    var fetchAlbumCategories = async () => {
      try {
        let data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
        setSearchData(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumCategories();
  }, []);

  const onChangeSearchText = (text) => {
    const newData = categories.filter((item) => {
      const itemData = `${item?.title?.toUpperCase()}`;
      return itemData.indexOf(text) > -1;
    });
    setSearchData(newData);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={{
            width: "100%",
            height: 30,
            paddingLeft: 8,
            fontSize: 16,
            backgroundColor: "white",
            color: "black",
            marginTop: 100,
          }}
          placeholder="Otsi .."
          onChangeText={(insertField) => {
            onChangeSearchText(insertField.toUpperCase());
            setInsertField(insertField);
          }}
        />
      </View>

      <View>
        <FlatList
          data={searchData}
          renderItem={({ item }) => (
            <AlbumsAsColumn title={item.title} albums={item.albums.items} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={{ color: "white", fontSize: 18 }}>
          {`Otsingu tulemused: ${insertField}`}
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;
