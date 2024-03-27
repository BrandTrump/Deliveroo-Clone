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
import { spacing } from "@/themes/spacing";
import FeaturedRow from "@/components/FeaturedRow";

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
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight?"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
