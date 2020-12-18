import styled from "@emotion/styled";
import React from "react";
const MainDiv = styled.main`
  width: 100vw;
  height: 100vh;

  .hello {
    font-size: 24px;
    ${({ theme }) => theme.background};
  }
`;

const Example: React.FC = () => {
  return (
    <MainDiv>
      <div className="hello">Hello World</div>
    </MainDiv>
  );
};

export default Example;
