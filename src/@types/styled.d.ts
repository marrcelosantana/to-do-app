import "styled-components";
import { defaultTheme } from "../global/themes/default";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
