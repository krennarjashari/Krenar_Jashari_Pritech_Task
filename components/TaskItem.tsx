import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Trash2, Check, Calendar } from "lucide-react-native";

interface TastItemProps {
  title: string;
  description: string;
  isCompleted: boolean;
  createdDate: string;
  onToggle: () => void;
  onDelete: () => void;
}

function TaskItem({
  title,
  description,
  isCompleted,
  createdDate,
  onToggle,
  onDelete
}: TastItemProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.75}>
      <TouchableOpacity
       style={[styles.checkbox, isCompleted&& styles.checkboxCompleted]}
       onPress={onToggle} activeOpacity={0.8}
       >
        {isCompleted && <Check color="#0F2038" size={12} strokeWidth={3} />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.taskTitle, isCompleted && styles.textCompleted]}>{title}</Text>

        {description ? <Text>{description}</Text> : null}

        <View style={styles.dateRow}>
          <Calendar
            color="rgba(255,255,255,0.4)"
            size={12}
            style={styles.dateIcon}
          />
          <Text style={styles.dateText}>{createdDate}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7}>
        <Trash2 color="#EF4444" size={18} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    marginHorizontal: 24,
    marginTop: 12,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  checkboxCompleted: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  taskTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  taskDescription: {
    color: "#A3A3A3",
    fontSize: 14,
    marginTop: 2,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  dateIcon: {
    marginRight: 4,
  },
  dateText: {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: 11,
  },
  deleteButton: {
    padding: 4,
  },
});
