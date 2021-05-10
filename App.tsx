import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import MusicBar from "./components/MusicBar";
import { AppContext } from "./AppContext";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import SongReducer from "./SongReducer";
import { useState } from "react";
Amplify.configure(config);

let initialState = {
  songs: [
    {
      id: "ccdc0e30-e67b-40ae-8fc6-cbcefacc39d6",
      albumId: "84140d20-8180-4325-9ff7-0815403e48b1",
      artist: "Lappamu",
      title: "Jõe Diss Track",
      imageUri:
        "https://i2.wp.com/muusikaplaneet.ee/wp-content/uploads/2020/04/daniellevi11.jpg?resize=720%2C340&ssl=1",
      uri:
        "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
    },
  ],
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [songId, setSongId] = useState<string | null>(null);
  const [state, dispatch] = useReducer(SongReducer, initialState);

  const removeSong = (id) => {
    dispatch({
      type: "REMOVE_SONG",
      payload: id,
    });
  };
  const addSong = (song) => {
    dispatch({
      type: "ADD_SONG",
      payload: song,
    });
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            songId,
            setSongId: (id: string) => setSongId(id),
            songs: state.songs,
            removeSong: removeSong,
            addSong: addSong,
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <MusicBar></MusicBar>
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
