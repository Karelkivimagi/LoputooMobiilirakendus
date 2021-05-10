import React, { useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import SongsAsList from "../components/SongsAsList";
import AlbumDisplayData from "../components/AlbumDisplayData";
import { API, graphqlOperation } from "aws-amplify";
import { getAlbum } from "../src/graphql/queries";
import { useState } from "react";

  const AlbumScreen = () => {
  const route = useRoute();
  const ids = route.params.id;
  const [api, setApi] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(
            getAlbum, {
            id: ids 
            }
          )
        );
        setApi(data.data.getAlbum);
      } catch (e) {
        console.log(e);
      }
    };
    apiData();
  }, [
  ]);

  if (!api) {
    return (
      <View style={[styles.container, styles.cont2]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={api.songs.items}
        renderItem={({ item }) => 
          <SongsAsList 
            song={item} 
            onClick={true} 
          />
        }
            keyExtractor={
              (item) => item.id
            }
            ListHeaderComponent={
              () => 
              <AlbumDisplayData 
                album={api}>
              </AlbumDisplayData>
            }
      >
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default AlbumScreen;
