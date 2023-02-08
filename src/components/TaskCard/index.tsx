import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Task } from "../../models/Task";
import { Feather, AntDesign } from "@expo/vector-icons";

import { CheckBox, styles, TaskCardContainer, TaskSelect } from "./styles";

interface TaskCardProps {
  id: number;
  task: Task;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
}

export function TaskCard({ id, task, onDelete, onCheck }: TaskCardProps) {
  return (
    <TaskCardContainer>
      <TaskSelect>
        <CheckBox onPress={() => onCheck(id)}>
          {task.checked === true && (
            <AntDesign name="checkcircle" size={14} color="#5E60CE" />
          )}
        </CheckBox>
        <Text
          style={task.checked ? styles.descriptionChecked : styles.description}
        >
          {task.description}
        </Text>
      </TaskSelect>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Feather name="trash-2" size={16} color="white" />
      </TouchableOpacity>
    </TaskCardContainer>
  );
}
