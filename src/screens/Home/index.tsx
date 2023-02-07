import { Header } from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  Divisor,
  HomeContainer,
  HomeContent,
  Input,
  InputContainer,
} from "./styles";
import { InfoBar } from "../../components/InfoBar";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <InputContainer>
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <Button>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </Button>
        </InputContainer>

        <InfoBar />
        <Divisor />
      </HomeContent>
    </HomeContainer>
  );
}
