import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { homey } from "../../../../assets/images/home_bg.jpg";

const Title = styled.Text`
  padding: 16px;
  font-size: 25;
  color: ${({ theme }) => theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)`
  margin: 10px;
  backgroundcolor: white;
`;
const RestaurantCover = styled(Card.Cover)`
  margin: 20px;
  backgroundcolor: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Chop and Smile",
    icon,
    photos = [homey],
    address = "",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
