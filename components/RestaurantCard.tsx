import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { spacing } from "@/themes/spacing";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { Dish } from "@/types/Dish";
import { urlFor } from "@/sanity.config";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/App";

export type RestaurantCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
};

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: RestaurantCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      style={{
        backgroundColor: "white",
        marginRight: spacing[3],
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderRadius: spacing[1],
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        alt="Restaurant"
        style={{
          height: spacing[36],
          width: spacing[64],
          borderTopRightRadius: spacing[1],
          borderTopLeftRadius: spacing[1],
        }}
      />
      <View
        style={{
          paddingHorizontal: spacing[3],
          paddingBottom: spacing[4],
        }}
      >
        <Text
          style={{ fontWeight: "bold", fontSize: 18, paddingTop: spacing[2] }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text style={{ color: "#6b7280", fontSize: 12 }}>
            <Text style={{ color: "#22c55e" }}>{rating}</Text> . {genre}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <MapPinIcon size={22} color="gray" opacity={0.4} />
          <Text
            style={{
              color: "#6b7280",
              fontSize: 12,
              flexShrink: 1,
              maxWidth: spacing[52],
            }}
          >
            Nearby - <Text style={{}}>{address}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
