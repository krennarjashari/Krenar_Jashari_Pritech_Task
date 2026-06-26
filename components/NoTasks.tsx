import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ClipboardList } from "lucide-react-native";

function NoTasks() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <ClipboardList color="#FFFFFF" size={28} />
      </View>
      <Text style={styles.title}>No new tasks yet</Text>
    </View>
  );
}

export default NoTasks;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    marginTop: 60,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
