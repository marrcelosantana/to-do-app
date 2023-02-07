import { Feather, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  CheckBox,
  TaskCardContainer,
  TaskDescription,
  TaskSelect,
} from "./styles";

export function TaskCard() {
  const [checked, setChecked] = useState(false);

  function check() {
    setChecked(!checked);
  }

  return (
    <TaskCardContainer>
      <TaskSelect>
        <CheckBox onPress={check}>
          {checked === true && (
            <AntDesign name="checkcircle" size={13.8} color="#5E60CE" />
          )}
        </CheckBox>
        <TaskDescription>Primeira atividade com descrição.</TaskDescription>
      </TaskSelect>
      <TouchableOpacity>
        <Feather name="trash-2" size={16} color="white" />
      </TouchableOpacity>
    </TaskCardContainer>
  );
}
