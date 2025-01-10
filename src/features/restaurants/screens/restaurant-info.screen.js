import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantSafeAreaView = styled.SafeAreaView`
  flex: 1px;
  backgroundcolor: ${({ theme }) => theme.colors.brand.primary};
`;

const RestaurantSearchView = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const RestaurantListView = styled.View`
  flex: 1px;
  backgroundcolor: ${({ theme }) => theme.colors.bg.primary};
  height: 60%;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <RestaurantSafeAreaView>
        <RestaurantSearchView>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </RestaurantSearchView>
        <RestaurantListView>
          <RestaurantInfoCard />
        </RestaurantListView>
      </RestaurantSafeAreaView>
    </>
  );
};
