import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { mineShaftColor, secondaryColor } from "../../utils/style/colors";
import { fontSemibold13 } from "../../utils/style/fonts";
import { layout } from "../../utils/style/layout";
import { BrandText } from "../BrandText";

export type TableRowDataItem = {
  uid: string;
  keyId: string;
  label?: string;
  flex: number;
};

interface TableRowDataProps {
  data: TableRowDataItem[];
  specialRender?: (item: TableRowDataItem) => React.ReactNode;
  onPress?: () => void;
}

export const TableRowData: React.FC<TableRowDataProps> = ({
  data,
  specialRender,
  onPress,
}) => {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      {data.map(({ label, flex, keyId, uid }, index) => (
        <View
          key={label}
          style={{
            flex,
            paddingRight: data.length - 1 === index ? 0 : layout.padding_x1,
          }}
        >
          {(specialRender && specialRender({ label, flex, keyId, uid })) || (
            <BrandText style={styles.labelText}>{label}</BrandText>
          )}
        </View>
      ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderColor: mineShaftColor,
    borderTopWidth: 1,
    paddingVertical: layout.padding_x2,
    paddingHorizontal: layout.padding_x2_5,
  },
  labelText: {
    ...StyleSheet.flatten(fontSemibold13),
    color: secondaryColor,
    textTransform: "uppercase",
  },
});