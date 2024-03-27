import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { spacing } from "@/themes/spacing";

type CategoryCardProps = {
  imgUrl: string;
  title: string;
};

export default function CategoryCard({ imgUrl, title }: CategoryCardProps) {
  return (
    <TouchableOpacity style={{ position: "relative", marginRight: spacing[2] }}>
      <Image
        source={{ uri: imgUrl }}
        style={{
          height: spacing[20],
          width: spacing[20],
          borderRadius: spacing[1],
        }}
        alt="Food Category"
      />
      <Text
        style={{
          position: "absolute",
          bottom: spacing[1],
          left: spacing[1],
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
