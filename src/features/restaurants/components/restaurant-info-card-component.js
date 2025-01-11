import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer-component";
import { Text } from "../../../components/text-component";
import { homey } from "../../../../assets/images/home_bg.jpg";
import star from "../../../../assets/images/star";
import open from "../../../../assets/images/open";

import {
  RestaurantCard,
  RestaurantCover,
  Rating,
  Info,
  ImageCard,
  Section,
  SectionEnd,
} from "./restaurant-info-card-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Chop and Smile",
    icon,
    photos = [homey],
    address = "No 87, Northmen Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <ImageCard source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Text>{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
