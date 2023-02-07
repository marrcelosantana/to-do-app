import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import {
  CheckBox,
  TaskCardContainer,
  TaskDescription,
  TaskSelect,
} from "./styles";

interface TaskCardProps {
  id: number;
  taskDescription: string;
  onDelete: (id: number) => void;
}

export function TaskCard({ id, taskDescription, onDelete }: TaskCardProps) {
  const [checked, setChecked] = useState(false);

  function check() {
    setChecked(!checked);
    console.log(id);
  }

  return (
    <TaskCardContainer>
      <TaskSelect>
        <CheckBox onPress={check}>
          {checked === true && (
            <AntDesign name="checkcircle" size={13.8} color="#5E60CE" />
          )}
        </CheckBox>
        <TaskDescription>{taskDescription}</TaskDescription>
      </TaskSelect>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Feather name="trash-2" size={16} color="white" />
      </TouchableOpacity>
    </TaskCardContainer>
  );
}
