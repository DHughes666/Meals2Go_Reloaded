import { Stack } from "expo-router";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  useEffect(() => {
    if (oswaldLoaded || latoLoaded) {
      SplashScreen.hideAsync();
    }
  }, [oswaldLoaded, latoLoaded]);
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
