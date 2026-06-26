import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { X, Calendar, CheckCircle2, Clock } from "lucide-react-native";
import { Task } from "../app";

interface TaskDetailsProps {
  task: Task | null;
  onClose: () => void;
}

function TaskDetails({ task, onClose }: TaskDetailsProps) {
  if (!task) return null;

  return (
    <Modal
      visible={!!task}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={styles.contentCard}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <View style={styles.contentCard}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Task Details</Text>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <X color="#FFFFFF" size={20} />
              </TouchableOpacity>
            </View>

            <Text style={styles.taskTitle}>{task.title}</Text>
            {task.description ? (
              <Text style={styles.taskDescription}>{task.description}</Text>
            ) : null}

            <View style={styles.metaRow}>
              <Clock color="#A3A3A3" size={16} style={styles.metaIcon} />
              <Text style={styles.metaLabel}>Status:</Text>
              <Text
                style={[
                  styles.statusText,
                  task.isCompleted
                    ? styles.statusCompleted
                    : styles.statusActive,
                ]}
              >
                {task.isCompleted ? "Completed" : "Not Completed"}
              </Text>
            </View>

            <View style={styles.metaRow}>
              <Calendar color="#A3A3A3" size={16} style={styles.metaIcon} />
              <Text>Created date:</Text>
              <Text style={styles.metaValue}>{task.createdDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default TaskDetails;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contentCard: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#12253F",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#A3A3A3",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  closeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 6,
    borderRadius: 99,
  },
  taskTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  taskDescription: {
    color: "#D4D4D4",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  metaIcon: {
    marginRight: 8,
  },
  metaLabel: {
    color: "#A3A3A3",
    fontSize: 14,
    marginRight: 6,
  },
  metaValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
  },
  statusActive: {
    color: "#F59E0B",
  },
  statusCompleted: {
    color: "#10B981",
  },
});
