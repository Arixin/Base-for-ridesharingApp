import { Pane, Paragraph } from "evergreen-ui";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Image from "../../images/car.jpg";

const Home = () => {
  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;

  const LoginForm = styled.div`
    color: #fff;
    font-size: 35px;
    font-weight: bold;
  `;

  const RegisterForm = styled.div`
    color: #fff;
    font-size: 35px;
    font-weight: bold;
  `;

  return (
    <Pane
      style={{
        backgroundImage: `url(${Image})`,
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        gridTemplateRows: "200px 200px 100px 100px",
      }}
    >
      <h1 style={{ fontSize: "40px" }} height="50px">
        Hello World to our Ridesharing App
      </h1>

      <Paragraph
        textAlign="center"
        fontWeight="bold"
        color="#000"
        fontSize="18px"
      >
        Witaj w społecznośći Ridesharing. Jesteśmy aplikacją do ułatwienia Ci
        dojazdu na uczelnie.
        <br /> Skupiamy się na zrzeszeniu ludzi do jazdy razem co pomoże
        ograniczyć emisje spalin a co idzie za tym chronić Nasze środowisko.
      </Paragraph>

      <StyledLink is={Link} to="/login">
        <LoginForm>Zaloguj się</LoginForm>
      </StyledLink>

      <StyledLink as={Link} to="/Register">
        <RegisterForm>Dołącz do Nas</RegisterForm>
      </StyledLink>
    </Pane>
  );
};

export default Home;
