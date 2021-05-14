import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { onLogin } from "../redux/actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  const handleName = (e) => setName(e.target.value);

  const addLogin = () => {
    dispatch(onLogin(name));
    window.location.pathname = "/";
  };

  return (
    <div className="login">
      <div className="login__block">
        <div className="login__title">SignIn</div>
        <input
          className="login__input"
          type="text"
          placeholder="What's your name?"
          name="name"
          value={name}
          onChange={handleName}
        ></input>
        <Button onClick={addLogin} className="login__button">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
