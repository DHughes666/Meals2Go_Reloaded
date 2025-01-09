import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { RestaurantScreen } from "../src/features/restaurants/screens/restaurant-info.screen";

export default function Index() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
