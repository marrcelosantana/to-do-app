import {
  Number,
  NumberContainer,
  InfoBarContainer,
  TaskStatus,
  Title,
} from "./styles";

export function InfoBar() {
  return (
    <InfoBarContainer>
      <TaskStatus>
        <Title style={{ color: "#4EA8DE" }}>Criadas</Title>
        <NumberContainer>
          <Number>0</Number>
        </NumberContainer>
      </TaskStatus>

      <TaskStatus>
        <Title style={{ color: "#8284FA" }}>Concluídas</Title>
        <NumberContainer>
          <Number>0</Number>
        </NumberContainer>
      </TaskStatus>
    </InfoBarContainer>
  );
}
