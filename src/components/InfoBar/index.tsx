import {
  Number,
  NumberContainer,
  InfoBarContainer,
  TaskStatus,
  Title,
} from "./styles";

interface InfoBarProps {
  tasksCreated: number;
  tasksChecked: () => number;
}

export function InfoBar({ tasksCreated, tasksChecked }: InfoBarProps) {
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
          <Number>{tasksChecked()}</Number>
        </NumberContainer>
      </TaskStatus>
    </InfoBarContainer>
  );
}
