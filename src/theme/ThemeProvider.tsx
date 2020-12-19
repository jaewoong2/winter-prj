import React, {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeType } from "./styled";
import { RootState } from "../configureStore/configureStore";
import { changeAction } from "../slices/dark";
import { ThemeProvider } from "@emotion/react";

interface themeProvidersProps {
  children?:
    | ReactChild
    | JSX.Element
    | JSX.Element[]
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
}

const black = "rgba(20, 20, 20, 0.6)";
const white = "rgba(230, 230, 230, 0.7)";
// const purple = "rgba(119, 17, 167, 0.9)";

const ThemeProviders: React.FC<{ children?: themeProvidersProps }> = ({
  children,
}: themeProvidersProps) => {
  const isDarkMode = useSelector((state: RootState) => state.dark);
  const darkThemeInStorage = localStorage.getItem("dark");
  const dispatch = useDispatch();

  const theme: ThemeType = useMemo(
    () => ({
      color: isDarkMode ? black : white,
      background: isDarkMode ? "rgba(20, 20, 20, 0.7)" : white,
      textColor: isDarkMode ? white : black,
      boxShadow: isDarkMode ? white : black,
      isDarkMode: isDarkMode,
    }),
    [isDarkMode]
  );

  useEffect(() => {
    if (darkThemeInStorage !== null) {
      if (JSON.parse(darkThemeInStorage).value) {
        !isDarkMode && dispatch(changeAction({ theme: true }));
      } else {
        isDarkMode && dispatch(changeAction({ theme: false }));
      }
    }
  }, [isDarkMode, darkThemeInStorage, dispatch]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
