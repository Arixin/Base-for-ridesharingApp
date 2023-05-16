import {
  Button,
  Link,
  minorScale,
  Pane,
  Paragraph,
  TextInputField,
} from "evergreen-ui";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Image from "../../images/car2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    let result = await fetch(
      `http://ec2-3-70-127-13.eu-central-1.compute.amazonaws.com:8080/user/login?login=${login}&password=${password}`
    ).then((result) => result.json());
    if (result > 0) {
      console.log(result);
      localStorage.getItem(JSON.stringify(result));
      localStorage.setItem("userID", JSON.stringify(result));
      navigate("/main");
    } else {
      //TODO: Handle error while loging in
    }
  }

  return (
    <Pane
      style={{
        backgroundImage: `url(${Image})`,
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100vh",
        minHeight: "715px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Pane minWidth="400px" maxWidth="max-content">
        <TextInputField
          required
          label="Login"
          placeholder="Guest1234"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <TextInputField
          required
          label="Hasło"
          type="password"
          placeholder="*****************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          width="100%"
          backgroundColor="#a1cbb7"
          borderRadius="50px"
          color="#000"
          onClick={Login}
        >
          Zaloguj się
        </Button>
        <Paragraph marginTop={minorScale(3)}>
          Nie masz konta?{" "}
          <Link is={RouterLink} to="/register">
            Zarejestruj się
          </Link>
          .
        </Paragraph>

        <Paragraph>
          Wróć do strony głównej.{" "}
          <Link is={RouterLink} to="/">
            Strona główna
          </Link>
          .
        </Paragraph>
      </Pane>
    </Pane>
  );
};

export default Login;
