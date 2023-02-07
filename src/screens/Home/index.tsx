import { useState } from "react";
import { Alert, FlatList } from "react-native";

import { Header } from "../../components/Header";
import { InfoBar } from "../../components/InfoBar";
import { TaskCard } from "../../components/TaskCard";

import { AntDesign, Feather } from "@expo/vector-icons";

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

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  function handleCreateTask() {
    setTasks([...tasks, description]);
    setDescription("");
  }

  function handleDeleteTask(id: number) {
    Alert.alert("Remover", `Deseja remover a task de número: ${id}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task, index) => {
              return index !== id;
            })
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

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
          <Button onPress={handleCreateTask} disabled={description === ""}>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </Button>
        </InputContainer>

        <InfoBar tasksCreated={tasks.length} />
        <Divisor />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TaskCard
              taskDescription={item}
              key={index}
              id={index}
              onDelete={handleDeleteTask}
            />
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
