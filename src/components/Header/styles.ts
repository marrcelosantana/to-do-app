import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 173px;
  background-color: ${(props) => props.theme.colors["gray-700"]};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 111px;
  height: 32px;
`;
