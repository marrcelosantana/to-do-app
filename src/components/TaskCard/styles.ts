import styled from "styled-components/native";

export const TaskCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border-radius: 8px;
`;

export const TaskDescription = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;
