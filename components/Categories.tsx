import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "@/types/Category";
import client, { urlFor } from "@/sanity.config";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    client
      .fetch(`*[_type == "category"]`)
      .then((category) => setCategories(category));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
