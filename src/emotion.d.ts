import "@emotion/react";
import { ThemeType } from "./theme/styled";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {
    props?: string;
  }
}
