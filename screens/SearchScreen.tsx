import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function TabTwoScreen() {
  

  return (
    <View style={styles.container}>
        <SearchBar>
        </SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "red",
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
