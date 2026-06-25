import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Search from "../components/Search";
import FilterTasks from "../components/FilterTasks";
import NoTasks from "../components/NoTasks";
import AddTask from "../components/AddTask";
import TaskDetails from "../components/TaskDetails";

export interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdDate: string;
}

function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Setup Project Structure",
      description: "Create components directory and structure views.",
      isCompleted: true,
      createdDate: "Jun 24, 2026",
    },
    {
      id: "2",
      title: "Implement Application Logic",
      description: "Connect state arrays, functional hooks, and validations.",
      isCompleted: false,
      createdDate: "Jun 25, 2026",
    },
  ]);

  return (
    <View style={styles.webViewportCenter}>
      <SafeAreaView
        style={styles.phoneContainer}
        edges={["right", "bottom", "left"]}
      >
        <ScrollView contentContainerStyle={styles.scrollLayout} bounces={false}>
          <Header />
          <Search />
          <FilterTasks />
          <NoTasks />
          <TaskDetails />
          <AddTask />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  webViewportCenter: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneContainer: {
    width: "100%",
    maxWidth: 430,
    height: "100%",
    backgroundColor: "#0F2038",
  },
  scrollLayout: {
    flexGrow: 1,
    paddingBottom: 40,
  },
});
