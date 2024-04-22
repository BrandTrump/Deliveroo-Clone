import { urlFor } from "@/sanity.config";
import { spacing } from "@/themes/spacing";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

type DishRowProps = {
  key: string;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function DishRow({
  key,
  id,
  name,
  description,
  price,
  image,
}: DishRowProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={[styles.button, isPressed && { borderBottomWidth: 0 }]}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1, paddingRight: spacing[2] }}>
            <Text style={{ fontSize: 18, marginBottom: spacing[1] }}>
              {name}
            </Text>
            <Text style={{ color: "#9ca3af" }}>{description}</Text>
            <Text style={{ color: "#9ca3af", marginBottom: spacing[2] }}>
              {/* {price} */}
              $25.00
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={{
                height: 20,
                width: 20,
                backgroundColor: "#d1d5db",
                padding: spacing[4],
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View
          style={{ backgroundColor: "white", paddingHorizontal: spacing[4] }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing[2],
              paddingBottom: spacing[3],
            }}
          >
            <TouchableOpacity>
              <MinusCircleIcon color={"00CCBB"} size={40} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color={"00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: spacing[4],
    borderColor: "#e5e7eb",
  },
});
