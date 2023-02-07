import styled from "styled-components/native";

export const InfoBarContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const TaskStatus = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-right: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const NumberContainer = styled.View`
  background-color: ${(props) => props.theme.colors["gray-400"]};
  padding: 0 5px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
`;
