import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import { CheckBox, styles, TaskCardContainer, TaskSelect } from "./styles";

interface TaskCardProps {
  id: number;
  taskDescription: string;
  onDelete: (id: number) => void;
}

export function TaskCard({ id, taskDescription, onDelete }: TaskCardProps) {
  const [checked, setChecked] = useState(false);

  return (
    <TaskCardContainer>
      <TaskSelect>
        <CheckBox onPress={() => setChecked(!checked)}>
          {checked === true && (
            <AntDesign name="checkcircle" size={13.8} color="#5E60CE" />
          )}
        </CheckBox>
        <Text style={checked ? styles.descriptionChecked : styles.description}>
          {taskDescription}
        </Text>
      </TaskSelect>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Feather name="trash-2" size={16} color="white" />
      </TouchableOpacity>
    </TaskCardContainer>
  );
}
