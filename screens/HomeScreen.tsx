import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "@/components/Categories";

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
          paddingBottom: 16,
          alignItems: "center",
          marginHorizontal: 4,
          paddingHorizontal: 8,
          gap: 8,
        }}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          alt=""
          style={{
            height: 28,
            width: 28,
            backgroundColor: "rgb(209 213 219)",
            padding: 4,
            borderRadius: 100,
          }}
        />
        <View style={{ flex: 1 }}>
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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: 28,
            }}
          >
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingBottom: 8,
          marginHorizontal: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 8,
            flex: 1,
            gap: 8,
            backgroundColor: "#e5e7eb",
            padding: 12,
            alignItems: "center",
          }}
        >
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView>
        {/* Categories  */}
        <Categories />
        {/* Featured rows */}
      </ScrollView>
    </SafeAreaView>
  );
}
