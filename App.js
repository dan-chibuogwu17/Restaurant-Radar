import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';


const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
      <>
        <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight }}>
          <SearchBar/>
          <ListView/>
        </SafeAreaView>
        <ExpoStatusBar style="auto"/>
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
  searchBar: {
    padding: 16,
    backgroundColor: 'green'
  },
  listView: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  }
});
