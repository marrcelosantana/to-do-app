import styled from "styled-components/native";

export const TaskCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.colors["gray-400"]};
  border-radius: 8px;
  height: 54px;
  margin-bottom: 10px;
`;

export const TaskSelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CheckBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme.colors.blue};
`;

export const TaskDescription = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  margin-left: 10px;
`;
