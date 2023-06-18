import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
  justify-content: space-between;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;
