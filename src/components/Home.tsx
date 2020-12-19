import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../configureStore/configureStore";
import { changeAction } from "../slices/dark";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  .nav-container {
    width: 100%;
    height: 200px;
    background-color: rgba(200, 50, 50, 0.85);
    position: relative;

    .dark-icon {
      position: absolute;
      right: 10px;
      font-size: 30px;
    }
  }
  .left-nav-container {
    width: 20%;
    height: 500px;
    position: absolute;
    border-radius: 10px;
    left: 10%;
    top: 150px;
    background-color: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.textColor};
    box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
  }
  .right-section-container {
    width: 55%;
    height: 500px;
    position: absolute;
    border-radius: 10px;
    right: 10%;
    top: 150px;
    color: ${({ theme }) => theme.textColor};
    background-color: ${(props) => props.theme.background};
    box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
  }

  @media screen and (max-width: 896px) {
    align-items: center;
    .left-nav-container {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 130px;
      left: 15px;
      z-index: 5;
      border-radius: 35px;
      box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      .user-image {
        width: 100%;
        height: 100%;
        border-radius: 35%;
      }
      .login-icon {
        font-size: 20px;
      }
    }
    .right-section-container {
      width: 95%;
      height: 100%;
      right: auto;
      top: 180px;
      position: absolute;
      border-radius: 10px;
      box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
    }
  }
`;

const Home = () => {
  const userInfo = useSelector((state: RootState) => state.user.user);
  const isDarkMode = useSelector((state: RootState) => state.dark);
  const dispatch = useDispatch();

  const onToggleDarkMode = useCallback(() => {
    try {
      localStorage.setItem("dark", JSON.stringify({ value: !isDarkMode }));
      dispatch(changeAction({ theme: !isDarkMode }));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, isDarkMode]);

  return (
    <Main>
      <nav className="nav-container">
        <span onClick={onToggleDarkMode} className="dark-icon">
          {isDarkMode ? "🌙" : "🌞"}
        </span>
      </nav>
      <nav className="left-nav-container">
        {userInfo.uid !== undefined ? (
          <img
            className="user-image"
            src={userInfo.photoURL}
            alt={userInfo.nickname}
          />
        ) : (
          <span className="login-icon">👩</span>
        )}
      </nav>
      <section className="right-section-container"></section>
      <section></section>
    </Main>
  );
};

export default Home;
