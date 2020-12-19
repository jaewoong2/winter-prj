import MyButton from "./Button";
import InputCustom from "./Input";
import userInput from "../hooks/useInput";
import React, { useCallback, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { GooglePlusOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const LoginDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(
      rgba(66, 65, 45, 0.7),
      rgba(30, 65, 45, 0.7),
      rgba(66, 30, 45, 0.7)
    );

    align-items: center;

    form {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .input {
        font-family: "Noto Serif KR", serif;
        color: black;
        font-size: 1.05rem;
        &::placeholder {
          color: black;
        }
      }
      button {
        margin-top: 20px;
        width: 100%;
        height: 45px;
        font-family: "Noto Serif KR", serif;
        border-radius: 30px;
        color: #eee;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        font-size: 0.96rem;
        background: linear-gradient(
          to left,
          rgba(120, 120, 220, 0.5),
          rgba(122, 190, 220, 0.7),
          rgba(90, 200, 100, 0.7),
          rgba(50, 230, 100, 0.7)
        );
        filter: saturate(30%);
        &:hover {
          filter: saturate(80%);
        }
      }
    }
    hr {
      margin-top: 30px;
      width: 35%;
      border: 0;
      border-bottom: 1px solid black;
    }
    .login {
      font-family: "Noto Serif KR", serif;
      font-size: 0.9rem;
      width: 35%;
      span {
        float: right;
        margin-top: 7px;
        margin-right: 3px;
        &:hover {
          color: white;
          cursor: pointer;
          transition: color 0.5s;
        }
        transition: color 0.5s;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
  .nav-btn-container {
    width: 35%;
    display: flex;
    justify-content: space-evenly;
    font-family: "Noto Serif KR", Lato;
    align-items: center;
    .loginWith-google {
      font-size: 0.9rem;

      .loginWith-google-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(50, 150, 150, 0.6);

        .children {
          font-size: 1.5rem;
        }
      }
    }

    .loginWith-signUp {
      .loginWith-signUp-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-family: inherit;
        font-size: 1rem;
        letter-spacing: 1px;
        font-size: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
`;

const LoginContainer = ({ history }: RouteComponentProps) => {
  const [email, setEmail, onChangeEmail] = userInput("");
  const [password, setPassword, onChangePassword] = userInput("");
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      console.log(e);
    },
    [email, password]
  );
  // 로그인 완료 시 메인 페이지

  return (
    <LoginDiv>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <nav className="nav-container-bar"></nav>
          <section className="form-container">
            <form onSubmit={onSubmitLogin}>
              <InputCustom
                value={email}
                name="email"
                onChange={onChangeEmail}
                placeholder="이메일"
              ></InputCustom>
              <InputCustom
                value={password}
                name="password"
                onChange={onChangePassword}
                placeholder="비밀번호"
              ></InputCustom>
              <MyButton>로그인 하기</MyButton>
            </form>
            <hr />
            <nav className="nav-btn-container">
              <div className="loginWith-google">
                <MyButton
                  className="loginWith-google-btn"
                  onClick={() => console.log("구글로그인")}
                >
                  <GooglePlusOutlined />
                </MyButton>
              </div>
              <div className="loginWith-signUp">
                <MyButton primary className="loginWith-signUp-btn">
                  <Link to="/signup">
                    <UsergroupAddOutlined />
                  </Link>
                </MyButton>
              </div>
            </nav>
          </section>
        </>
      )}
    </LoginDiv>
  );
};

export default React.memo(withRouter(LoginContainer));
