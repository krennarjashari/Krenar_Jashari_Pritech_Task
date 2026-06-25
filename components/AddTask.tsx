import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { X } from "lucide-react-native";

interface AddTaskProps{
  visible:boolean;
  onClose:()=>void;
  onAdd:(title:string, description:string)=>void;
}

function AddTask({visible, onClose, onAdd}:AddTaskProps) {
  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const [error, setError]=useState(false);

  const handleSubmit=()=>{
    if(title.trim()===""){
      setError(true);
      return;
    }

    onAdd(title,description);

    setTitle('');
    setDescription('');
    setError(false);
  }

  const handleClose=()=>{
    setError(false);
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.formCard}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Create New Task</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <X color="#FFFFFF" size={20} />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter task title.."
            placeholderTextColor="#8E8E93"
            value={title}
            onChangeText={(text)=>{
              setTitle(text);
              if(text.trim()!==""){
                setError(false);
              }
            }}
          />

          {error && (
            <Text style={styles.errorText}>Task title is required.</Text>
          )}

          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={[styles.textInput, styles.textAreaInput]}
            placeholder="Enter short description details.."
            placeholderTextColor="#8E8E93"
            multiline={true}
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity 
          style={styles.submitButton} 
          activeOpacity={0.83}
          onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formCard: {
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
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 6,
    borderRadius: 99,
  },
  inputLabel: {
    color: "#A3A3A3",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 14,
    textTransform: "uppercase",
  },
  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    color: "#FFFFFF",
    fontSize: 16,
    paddingHorizontal: 14,
    height: 48,
  },
  textAreaInput: {
    height: 80,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  submitButtonText: {
    color: "#0F2038",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
});
