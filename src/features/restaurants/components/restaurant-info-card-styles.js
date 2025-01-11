import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ImageCard = styled.Image`
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;
const RestaurantCard = styled(Card)`
  margin: 10px;
  backgroundcolor: white;
`;
const RestaurantCover = styled(Card.Cover)`
  margin: 20px;
  backgroundcolor: white;
`;

export {
  Rating,
  RestaurantCard,
  RestaurantCover,
  ImageCard,
  SectionEnd,
  Section,
  Info,
};
