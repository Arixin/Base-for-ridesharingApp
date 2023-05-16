import React from "react";
import Image from "../../images/user.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Map from "../MapComponent/Map";

const Main = () => {
  const MainBox = styled.div`
    display: grid;
    height: 100%;
    background-color: #a1cbb7;
    grid-template-rows: 120px;
    position: relative;
  `;

  const NavBar = styled.div`
    background-color: #52b788;
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const SearchInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 5px;
    border-radius: 20px;
    border: none;
    margin: 5px;
  `;

  const AvatarIcon = styled.img`
    background-color: #fff;
    width: 50px;
    height: 50px;
    margin-left: 30px;
    border-radius: 50%;
  `;

  const MapBox = styled.div`
    display: flex;
    justify-content: left;
  `;

  const MapComp = styled.div`
    width: 60vw;
    height: 80vh;
    background-color: darkslategray;
    position: relative;
  `;

  const InfoComp = styled.div`
    width: 30vw;
    height: 80vh;
    border: 2px black solid;
    padding: 9px;
  `;

  // let logOutInfo = JSON.parse(localStorage.getItem());

  return (
    <MainBox>
      <NavBar>
        <SearchInput placeholder="From..." />
        <SearchInput placeholder="To..." />
        <Link is={Link} to="/profile">
          <AvatarIcon src={Image} />
        </Link>
      </NavBar>
      <MapBox>
        <MapComp>
          <Map />
        </MapComp>
        <InfoComp></InfoComp>
      </MapBox>
    </MainBox>
  );
};

export default Main;
