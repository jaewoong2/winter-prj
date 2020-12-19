import styled from "@emotion/styled";
import React from "react";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  .nav-container {
    width: 100%;
    height: 200px;
    background-color: rgba(200, 50, 50, 0.85);
  }
  .left-nav-container {
    width: 20%;
    height: 600px;
    position: absolute;
    border-radius: 10px;
    left: 10%;
    top: 150px;
    background-color: white;
    box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
  }
  .right-section-container {
    width: 55%;
    height: 600px;
    position: absolute;
    border-radius: 10px;
    right: 10%;
    top: 150px;
    background-color: white;
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
      background-color: white;
      box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
    }
    .right-section-container {
      width: 95%;
      height: 100%;
      right: auto;
      top: 180px;
      position: absolute;
      border-radius: 10px;
      background-color: white;
      box-shadow: 2px 2px 6px rgba(20, 20, 2, 0.7);
    }
  }
`;

const Home = () => {
  return (
    <Main>
      <nav className="nav-container"></nav>
      <nav className="left-nav-container"></nav>
      <section className="right-section-container"></section>
      <section></section>
    </Main>
  );
};

export default Home;
