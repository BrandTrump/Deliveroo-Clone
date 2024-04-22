import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "@/components/Categories";
import { spacing } from "@/themes/spacing";
import FeaturedRow from "@/components/FeaturedRow";
import client from "@/sanity.config";
import { FeaturedCategory } from "@/types/FeaturedCategory";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [featuredCategories, setFeaturedCategories] =
    useState<FeaturedCategory[]>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured'] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: spacing[3],
          alignItems: "center",
          marginHorizontal: spacing[4],
          gap: spacing[2],
        }}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          alt=""
          style={{
            height: spacing[7],
            width: spacing[7],
            backgroundColor: "rgb(209 213 219)",
            padding: spacing[4],
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
          gap: spacing[2],
          paddingBottom: spacing[2],
          marginHorizontal: spacing[4],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            gap: spacing[2],
            backgroundColor: "#e5e7eb",
            padding: spacing[3],
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

      <ScrollView
        style={{ backgroundColor: "#f3f4f6" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories  */}
        <Categories />
        {/* Featured rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
