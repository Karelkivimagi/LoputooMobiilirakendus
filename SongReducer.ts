export default (
  state: { songs: any[] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "REMOVE_SONG":
      return {
        ...state,
        songs: state.songs.filter((song: any) => song.id !== action.payload),
      };
    case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };

    default:
      return state;
  }
};
