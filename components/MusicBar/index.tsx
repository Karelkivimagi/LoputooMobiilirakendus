import React, { useContext, useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from "aws-amplify";
import styles from "../styles/MusicBarStyles";
import { Sound } from "expo-av/build/Audio/Sound";
import { AppContext } from "../../AppContext";
import { getSong } from "../../src/graphql/queries";

const MusicBar = () => {
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  const { songId, addSong, songs, removeSong } = useContext(AppContext);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getSong, { id: songId })
        );

        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    };

    fetchSong();
  }, [songId]);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  useEffect(() => {
    if (song) {
      playCurrentSong();
      songs.filter((item) => {
        if (item.id === songId) {
          setAdded(true);
        } else setAdded(false);
      });
    }
  }, [song, added]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  if (!song) {
    return null;
  }

  const onAddSong = () => {
    let Song = {
      id: song.id,
      albumId: song.albumId,
      artist: song.artist,
      imageUri: song.imageUri,
      title: song.title,
      uri: song.uri,
    };
    if (songs.length > 0) {
      songs?.filter((item) => {
        if (item.id !== songId) {
          addSong(Song);
          setAdded(true);
        } else {
          alert("Already Added");
          setAdded(true);
        }
      });
    } else {
      addSong(Song);
      setAdded(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            {added ? (
              <AntDesign
                name="heart"
                size={30}
                color={"red"}
                onPress={() => {
                  removeSong(song.id);
                  setAdded(false);
                }}
              />
            ) : (
              <AntDesign
                name="hearto"
                size={30}
                color={"white"}
                onPress={onAddSong}
              />
            )}
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={30}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicBar;
