import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>post screen</Text>
      <Button
        title="Click here"
        onPress={() => alert("Button clicked")}
      ></Button>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8FCBBc",
  },
});
