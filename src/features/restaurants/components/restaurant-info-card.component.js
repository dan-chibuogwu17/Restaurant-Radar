import {
  Info,
  Rating,
  RestaurantCard,
  SectionEnd,
  Section,
  Icon,
  RestaurantCardCover,
} from "./restaurant-info-card-styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import StarIcon from "../../../../assets/Star";
import OpenIcon from "../../../../assets/Open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Chillings",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
    address = "10, Festac Town, Lagos",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array(Math.floor(rating)).fill(null);
  return (
    <RestaurantCard elevation={1}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} xml={StarIcon} height={20} width={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={OpenIcon} height={20} width={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
