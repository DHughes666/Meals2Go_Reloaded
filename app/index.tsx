import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
        }}
      >
        <Text
          style={{
            marginLeft: 8,
            marginTop: 8,
            fontSize: 20,
          }}
        >
          search
        </Text>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            marginLeft: 8,
            marginTop: 8,
            fontSize: 20,
          }}
        >
          list
        </Text>
      </View>
    </View>
  );
}
