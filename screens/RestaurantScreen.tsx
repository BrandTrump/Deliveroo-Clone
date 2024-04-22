import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";
import { urlFor } from "@/sanity.config";
import { spacing } from "@/themes/spacing";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "@/components/DishRow";

type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Restaurant"
>;

export default function RestaurantScreen({
  route,
  navigation,
}: RestaurantScreenProps) {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lat,
    long,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          style={{
            width: "100%",
            height: spacing[56],
            backgroundColor: "gray",
            padding: spacing[4],
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: spacing[14],
            left: spacing[5],
            padding: spacing[2],
            backgroundColor: "#f3f4f6",
            borderRadius: 100,
          }}
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white" }}>
        <View style={{ paddingHorizontal: spacing[4], paddingTop: spacing[4] }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: spacing[2],
              marginVertical: spacing[1],
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: spacing[1],
              }}
            >
              <StarIcon color={"green"} opacity={0.5} size={22} />
              <Text style={{ fontSize: 12, color: "#6b7280" }}>
                <Text style={{ color: "#22c55e" }}>{rating}</Text>. {genre}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: spacing[1],
              }}
            >
              <MapPinIcon color={"gray"} opacity={0.4} size={22} />
              <Text style={{ fontSize: 12, color: "#6b7280" }}>
                Nearby - {address}
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: "#6b7280",
              paddingBottom: spacing[4],
              marginTop: spacing[2],
            }}
          >
            {short_description}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing[2],
            padding: spacing[4],
            borderColor: "#d1d5db",
            borderBottomWidth: 1,
            borderTopWidth: 1,
          }}
        >
          <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
          <Text
            style={{ paddingLeft: spacing[2], flex: 1, fontWeight: "bold" }}
          >
            Have a food allergy?
          </Text>
          <ChevronLeftIcon size={20} color={"#00CCBB"} rotation={180} />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            paddingHorizontal: spacing[4],
            paddingTop: spacing[6],
            marginBottom: spacing[3],
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </Text>
      </View>
    </ScrollView>
  );
}
