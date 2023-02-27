import { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: #fff;
`;

const SearchContainer = styled.View`
  margin: 16px;
  background-color: white;
  box-shadow: 2px 4px 7px lightgrey;
`;

const SearchListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #eaeaea;
`;

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
          elevation={0}
        />
      </SearchContainer>
      <SearchListContainer>
        <RestaurantInfoCard />
      </SearchListContainer>
    </SafeArea>
  );
};
