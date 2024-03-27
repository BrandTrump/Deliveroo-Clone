import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { spacing } from "@/themes/spacing";
import RestaurantCard from "./RestaurantCard";

type FeaturedRowProps = {
  id: string;
  title: string;
  description: string;
};
export default function FeaturedRow({
  id,
  title,
  description,
}: FeaturedRowProps) {
  return (
    <View>
      <View
        style={{
          marginTop: spacing[4],
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: spacing[4],
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>

      <Text
        style={{
          fontSize: 12,
          paddingHorizontal: spacing[4],
          color: "#6b7280",
        }}
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: spacing[4] }}
      >
        <RestaurantCard
          id={1}
          imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Restaurant"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={["lamb", "fish"]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Restaurant"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={["lamb", "fish"]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Restaurant"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={["lamb", "fish"]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
