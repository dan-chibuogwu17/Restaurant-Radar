import { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          elevation={2}
          style={styles.searchBar}
        />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 13 },
          { name: 12 },
          { name: 19 },
          { name: 18 },
          { name: 15 },
          { name: 2 },
        ]}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#FFFFFF",
  },
});
