import {
  Number,
  NumberContainer,
  InfoBarContainer,
  TaskStatus,
  Title,
} from "./styles";

interface InfoBarProps {
  tasksCreated: number;
}

export function InfoBar({ tasksCreated }: InfoBarProps) {
  return (
    <InfoBarContainer>
      <TaskStatus>
        <Title style={{ color: "#4EA8DE" }}>Criadas</Title>
        <NumberContainer>
          <Number>{tasksCreated}</Number>
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
