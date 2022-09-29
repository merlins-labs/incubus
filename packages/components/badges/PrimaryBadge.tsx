import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import { primaryColor, secondaryColor } from "../../utils/style/colors";
import { fontSemibold14 } from "../../utils/style/fonts";
import { BrandText } from "../BrandText";

export const PrimaryBadge: React.FC<{
  label: string | number;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: "primary" | "secondary";
}> = ({ label, style, backgroundColor = "primary" }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          height: 24,
          maxHeight: 24,
          minHeight: 24,
        },
        style,
      ]}
    >
      <View
        style={{
          paddingVertical: 4,
          paddingHorizontal: 10,
          backgroundColor:
            backgroundColor === "primary" ? primaryColor : secondaryColor,
          borderRadius: 999,
        }}
      >
        <BrandText style={[fontSemibold14, { color: "#000000" }]}>
          {label}
        </BrandText>
      </View>
    </View>
  );
};