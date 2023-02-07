import { HeaderContainer, Image } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image source={require("../../assets/Logo.png")} />
    </HeaderContainer>
  );
}
