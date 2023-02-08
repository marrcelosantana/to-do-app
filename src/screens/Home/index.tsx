import { useState } from "react";
import { Alert, FlatList, Keyboard } from "react-native";

import { Header } from "../../components/Header";
import { InfoBar } from "../../components/InfoBar";
import { TaskCard } from "../../components/TaskCard";
import { Task } from "../../models/Task";

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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");

  function handleCreateTask() {
    const data = {
      description: description,
      checked: false,
    };

    setTasks([...tasks, data]);
    setDescription("");
    Keyboard.dismiss();
  }

  function findTasksCheckeds() {
    const taskCheckeds = tasks.filter((task) => task.checked === true);
    return taskCheckeds.length;
  }

  function handleCheckTask(id: number) {
    const newTasks = tasks.map((item, index) => {
      if (index === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) {
    Alert.alert("Remover", `Deseja remover a task selecionada?`, [
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

        <InfoBar tasksCreated={tasks.length} tasksChecked={findTasksCheckeds} />
        <Divisor />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          renderItem={({ item, index }) => (
            <TaskCard
              task={item}
              key={index}
              id={index}
              onDelete={handleDeleteTask}
              onCheck={handleCheckTask}
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
