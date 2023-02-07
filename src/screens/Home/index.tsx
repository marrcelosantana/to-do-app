import { Header } from "../../components/Header";
import { AntDesign, Feather } from "@expo/vector-icons";
import { InfoBar } from "../../components/InfoBar";
import { TaskCard } from "../../components/TaskCard";
import {
  Button,
  Divisor,
  EmptyList,
  EmptyListSubtitle,
  EmptyListTitle,
  HomeContainer,
  HomeContent,
  Input,
  InputContainer,
} from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  function handleCreateTask() {
    setTasks([...tasks, description]);
    setDescription("");
  }

  function handleDeleteTask() {}

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <InputContainer>
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={description}
            onChangeText={(description) => setDescription(description)}
          />
          <Button onPress={handleCreateTask}>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </Button>
        </InputContainer>

        <InfoBar />
        <Divisor />

        <FlatList
          data={tasks}
          keyExtractor={(index) => index}
          renderItem={({ item, index }) => (
            <TaskCard taskDescription={item} key={index} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyList>
              <Feather name="clipboard" size={56} color="#808080" />
              <EmptyListTitle>
                Você ainda não tem tarefas cadastradas
              </EmptyListTitle>
              <EmptyListSubtitle>
                Crie tarefas e organize seus itens a fazer
              </EmptyListSubtitle>
            </EmptyList>
          )}
        />
      </HomeContent>
    </HomeContainer>
  );
}
