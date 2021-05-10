import React, { createContext } from "react";
const context = {
  songId: null,
  addSong: (song) => {},
  removeSong: (id: string) => {},
  setSongId: (id: string) => {},
  songs: [
    {
      id: "",
      albumId: "",
      artist: "",
      title: "",
      imageUri: "",
      uri: "",
    },
  ],
};

export const AppContext = createContext(context);
