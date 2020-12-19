import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const MainButton = styled.button`
  border: 0;
  box-shadow: 0 2px 4px -2px;
  border-radius: 4px;
  transition: transform 0.4s, filter 0.3s;
  font-size: ${(props) => props.theme.props?.fontSize};
  background-color: ${(props) =>
    props.theme.props?.primary === true
      ? "rgba(25, 115, 245, 0.7)"
      : props.theme.props?.warning === true
      ? "rgba(255, 50, 40, 0.8)"
      : props.theme.props?.disabled === true
      ? "rgba(45, 45, 45, 0.7)"
      : "rgba(205, 205, 205, 0.7)"};
  .children {
    padding: 2px 3px 2px 3px;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: ${(props) =>
      props.theme.props?.disabled === false ? "pointer" : "not-allowed"};
    filter: ${(props) =>
      props.theme.props?.disabled === false ? "brightness(120%);" : "none"};
    transition-property: ${(props) =>
      props.theme.props?.disabled === false ? "filter" : "none"};
  }
  text-decoration: ${(props) =>
    props.theme.props?.disabled === true ? "line-through" : "none"};

  &:active {
    font-size: 0.85rem;
    filter: hue-rotate(20deg);
    transform: ${(props) =>
      props.theme.props?.disabled === false ? "scale(0.95);" : "none"};
  }
`;

type myButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  fontSize?: number | string;
  primary?: boolean;
  disabled?: boolean;
  warning?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const MyButton: ({
  type,
  fontSize,
  onClick,
  children,
  style,
  className,
  primary,
  disabled,
  warning,
}: myButtonProps) => JSX.Element = ({
  type,
  fontSize = "0.85rem",
  onClick,
  className,
  children,
  style,
  primary,
  disabled = false,
  warning,
}: myButtonProps) => {
  const originalTheme = useTheme();
  const styleMemo = useMemo(() => style, [style]);
  const themeMemo = useMemo(
    () => ({
      ...originalTheme,
      props: {
        primary,
        warning,
        disabled,
        fontSize,
      },
    }),
    [primary, warning, disabled, fontSize]
  );

  return (
    <MainButton
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled ? true : false}
      theme={themeMemo}
      style={styleMemo}
    >
      <div className="children">{children}</div>
    </MainButton>
  );
};

export default MyButton;
