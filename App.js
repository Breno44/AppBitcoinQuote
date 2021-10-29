import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { CurrentPrice } from "./src/components/CurrentPrice";
import { HistoryGraphic } from "./src/components/HistoryGraphic";
import { QuotationsList } from "./src/components/QuotationsList";
import { QuotationsItem } from "./src/components/QuotationsList/QuotationsItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ff9416" barStyle="dark-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationsItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
