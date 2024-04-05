import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { spacing } from "@/themes/spacing";
import RestaurantCard from "./RestaurantCard";
import client from "@/sanity.config";
import { Restaurant } from "@/types/Resturant";
import restaurant from "@/sanity/schemaTypes/restaurant";

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured' && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);
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
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
