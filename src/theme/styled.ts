import styled, { CreateStyled } from "@emotion/styled";
import { CSSProperties } from "react";

export interface ThemeType {
  color: string;
  background: string;
  textColor: string;
  boxShadow: string;
  isDarkMode: boolean;
  prop?: CSSProperties;
}

export default styled as CreateStyled;
