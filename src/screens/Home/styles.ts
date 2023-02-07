import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.colors["blue-dark"]};
  font-family: ${(props) => props.theme.fonts.bold};
`;
