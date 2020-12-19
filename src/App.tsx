import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense
          fallback={
            <div
              style={{
                flexDirection: "column",
                backgroundColor: "rgba(5, 5, 5, 0.8)",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>로딩중...</div>
            </div>
          }
        >
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
