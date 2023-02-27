import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
  box-shadow: 2px 4px 7px lightgrey;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: #fff;
`;

const { Text } = styled;
const Title = Text`
  padding-top: 16px;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Foodies",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
    address = "10, Festac Town, Lagos",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={0}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
