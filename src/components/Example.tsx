import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../configureStore/configureStore";
import { titleUpdateAction } from "../slices/title";
const MainDiv = styled.main`
  width: 100vw;
  height: 100vh;

  .hello {
    font-size: 24px;
    ${({ theme }) => theme.background};
  }
`;

const Example: React.FC = () => {
  const [state, setState] = useState<string>("안녕하세요");
  const title = useSelector((state: RootState) => state.title);
  const dispatch = useDispatch();
  const onClickTitle = useCallback(() => {
    dispatch(
      titleUpdateAction({
        data: "안녕",
      })
    );
  }, []);

  return (
    <MainDiv>
      <div onClick={onClickTitle} className="hello">
        {title}
      </div>
    </MainDiv>
  );
};

export default Example;
