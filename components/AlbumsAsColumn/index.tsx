import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "../styles/AlbumsAsColumnStyles";
import SingleAlbum from "../Album";
/*
// export type AlbumCategoryProps = {
//     title: string,
//     albums: [Album],
// }
*/
// avalehe albumid
const AlbumsAsColumn = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => (
          <SingleAlbum album={item}> </SingleAlbum>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      ></FlatList>
    </View>
  );
};

export default AlbumsAsColumn;
