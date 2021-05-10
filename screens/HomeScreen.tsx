import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, FlatList } from "react-native";
import AlbumsAsColumn from "../components/AlbumsAsColumn";
import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../src/graphql/queries";
import { useEffect, useState } from "react";
export default function HomeScreen() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      try {
        const data = await API.
        graphql(graphqlOperation
          (listAlbumCategorys));
        setApi(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    };

    apiData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={api}
        renderItem={({ item }) => (
          <AlbumsAsColumn 
            title={item.title} 
            albums={item.albums.items} 
          />
        )
      }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
