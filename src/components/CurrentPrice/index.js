import React from "react";

import { View, Text } from "react-native";

import { styles } from "./styles";

export function CurrentPrice(props) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ {props.last}</Text>
      <Text style={styles.textPrice}>Ultima Cotação</Text>
    </View>
  );
}
