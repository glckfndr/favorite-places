import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesList from "../components/Places/PlacesList";

export default function AllPlaces() {
  return (
    <View>
      <Text>AllPlaces</Text>
      <PlacesList />
    </View>
  );
}

const styles = StyleSheet.create({});
