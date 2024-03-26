import { View, SafeAreaView, Image, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { ChevronDownIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 3,
          alignItems: "center",
          marginHorizontal: 4,
          gap: 8,
        }}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          alt=""
          style={{
            height: 28,
            width: 28,
            backgroundColor: "gray",
            padding: 4,
            borderRadius: 100,
          }}
        />
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "rgb(209 213 219)",
              fontSize: 14,
              lineHeight: 16,
            }}
          >
            Deliver Now
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 28 }}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
