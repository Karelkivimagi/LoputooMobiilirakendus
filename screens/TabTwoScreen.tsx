import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { AppContext } from "../AppContext";
import SongsAsList from "../components/SongsAsList";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const { songs } = React.useContext(AppContext);

  const EmptyComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sinu kogu on tühi!</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={songs}
        renderItem={({ item }) => <SongsAsList song={item} onClick={false} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <EmptyComponent />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
