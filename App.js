import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <ListView />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Text>Search</Text>
    </View>
  );
}
function ListView() {
  return (
    <View style={styles.listView}>
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "green",
  },
  listView: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
