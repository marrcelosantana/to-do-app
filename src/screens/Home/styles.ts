import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors["gray-600"]};
`;

export const HomeContent = styled.View`
  padding: 0 10%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: -25px;
`;

export const Input = styled.TextInput`
  height: 52px;
  flex: 1;
  background-color: ${(props) => props.theme.colors["gray-500"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors["blue-dark"]};
`;

export const Divisor = styled.View`
  margin-top: 16px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors["gray-400"]};
  margin-bottom: 32px;
`;

export const EmptyList = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyListTitle = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors["gray-300"]};
`;

export const EmptyListSubtitle = styled.Text`
  color: ${(props) => props.theme.colors["gray-300"]};
  font-size: 12px;
`;
