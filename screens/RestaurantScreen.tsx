import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";

type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Restaurant"
>;

export default function RestaurantScreen({ route }: RestaurantScreenProps) {
  const params = route.params;
  return (
    <View>
      <Text>{params.title}</Text>
    </View>
  );
}
