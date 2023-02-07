import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TaskCardContainer, TaskDescription } from "./styles";

export function TaskCard() {
  return (
    <TaskCardContainer>
      <TaskDescription>Primeira atividade</TaskDescription>
      <TouchableOpacity>
        <Feather name="trash-2" size={16} color="white" />
      </TouchableOpacity>
    </TaskCardContainer>
  );
}
