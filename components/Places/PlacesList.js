import { FlatList, StyleSheet } from "react-native";
import React from "react";

export default function PlacesList({ places }) {
  return <FlatList data={places} />;
}

const styles = StyleSheet.create({});
