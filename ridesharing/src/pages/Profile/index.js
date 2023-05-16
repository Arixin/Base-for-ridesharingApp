import { Button, Pane } from "evergreen-ui";
import React from "react";
import Image from "../../images/car4.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Profile = () => {
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

  const NavBar = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
    width: 95vw;
    height: 20vh;
    top: 0px;
  `;

  const UserInfo = styled.div`
    width: 30vw;
    height: 70vh;
    padding: 15px;
    border: 2px solid white;
    border-radius: 20px;
    color: #fff;
  `;

  const Achivments = styled.div`
    width: 100%;
    height: 70vh;
    padding: 15px;
    color: #fff;
    border: 2px dashed white;
    border-radius: 20px;
  `;

  const MainBoxes = styled.div`
    display: flex;
  `;

  return (
    <Pane
      style={{
        backgroundImage: `url(${Image})`,
        display: "grid",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <NavBar>
        <h1 style={{ fontSize: "40px", color: "#fff" }}>
          Ridesharing fun and ecology.
        </h1>
        <Button
          position="fixed"
          right="0"
          marginRight="20px"
          backgroundColor="#a1cbb7"
          border="2px solid black"
          fontSize="15px"
        >
          <StyledLink is={Link} to="/main">
            Let's save the planet
          </StyledLink>
        </Button>
      </NavBar>
      <MainBoxes>
        <UserInfo>User info</UserInfo>
        <Achivments>Your achivments</Achivments>
      </MainBoxes>
    </Pane>
  );
};

export default Profile;
