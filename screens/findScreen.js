import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FindScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Find screen</Text>
      <Button
        title="Click here"
        onPress={() => alert("Button clicked")}
      ></Button>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8FCBBc",
  },
});
