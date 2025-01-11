import React from "react";
import { FlatList, Platform } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

const RestaurantSafeAreaView = styled.SafeAreaView`
  flex: 1px;
  margin-top: ${Platform.OS === "android" ? "16px" : "0px"};
  backgroundcolor: ${({ theme }) => theme.colors.brand.primary};
`;

const RestaurantSearchView = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const RestaurantListView = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

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
        <RestaurantListView
          data={[{ name: 1 }, { name: 2 }]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </RestaurantSafeAreaView>
    </>
  );
};
