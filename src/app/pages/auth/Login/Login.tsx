import React from "react";
import { useDispatch } from "react-redux";
import { doLogIn } from "../../../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(doLogIn({ user: "Fahad saeed", email: "fahadsaeed@gmail.com" }));
  };

  return (
    <div className="App-Login ">
      Login goes here
      <div>
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
