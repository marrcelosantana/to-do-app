import styled from "styled-components/native";
import { StyleSheet } from "react-native";

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

export const styles = StyleSheet.create({
  description: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 10,
    textDecoration: "none",
  },

  descriptionChecked: {
    fontSize: 13,
    marginLeft: 10,
    textDecoration: "line-through",
    color: "#808080",
  },
});
