import React, { Props } from "react";
import { Text, Image, View } from "react-native";
import styles from "../styles/SongsAsListStyles";
import { Song } from "../../types";
import { TouchableOpacity } from "react-native";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
export type SongsAsListProps = {
  song: Song;
  onClick?: boolean;
};

const SongsAsList = (props: SongsAsListProps) => {
  const { song, onClick } = props;
  const { setSongId } = useContext(AppContext);
  const onPlay = () => {
    setSongId(song.id);
  };
  return (
    <TouchableOpacity onPress={onClick ? onPlay : () => {}}>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongsAsList;
