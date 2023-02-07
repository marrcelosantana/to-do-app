import { StatusBar } from "react-native";
import { defaultTheme } from "./src/global/themes/default";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
