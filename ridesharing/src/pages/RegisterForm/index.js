import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Button,
  minorScale,
  Paragraph,
  Link,
  Pane,
  TextInputField,
} from "evergreen-ui";
import Image from "../../images/car2.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let RegisterItems = { login, email, name, surname, password };

    let isLoginSucessfull = await fetch(
      "http://ec2-3-70-127-13.eu-central-1.compute.amazonaws.com:8080/user/register",
      {
        method: "POST",
        body: JSON.stringify(RegisterItems),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((isLoginSucessfull) => isLoginSucessfull.json());
    if (isLoginSucessfull === true) {
      localStorage.setItem("user-info", JSON.stringify(isLoginSucessfull));
      navigate("/login");
      console.info(isLoginSucessfull);
    } else {
      // TODO: Handle when user gives wrong info
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Pane minWidth="400px" maxWidth="max-content">
        <TextInputField
          required
          type="text"
          label="Login"
          placeholder="Guest1234"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <TextInputField
          required
          label="Adres Email"
          placeholder="jan.nowak@edu.uni.lodz.pl"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Pane display="flex" gap={minorScale(3)}>
          <TextInputField
            required
            type="text"
            label="Imię"
            placeholder="Jan"
            flex="1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInputField
            required
            type="text"
            label="Nazwisko"
            placeholder="Kowalski"
            flex="1"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Pane>
        <TextInputField
          required
          label="Hasło"
          placeholder="**********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          width="100%"
          backgroundColor="#a1cbb7"
          borderRadius="50px"
          color="#000"
          onClick={signUp}
        >
          Zarejestruj się
        </Button>
        <Paragraph marginTop={minorScale(3)}>
          Masz już konto?{" "}
          <Link is={RouterLink} to="/login">
            Zaloguj się
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

export default Register;
