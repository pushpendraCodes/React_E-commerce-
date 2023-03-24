import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      
      
      <h2><img className="logo" src="https://cdn.shopify.com/s/files/1/0566/0839/1368/files/overlay_small_logo_b26282df-c7f1-44c3-9299-52b939f876ea.png?v=1650558069" alt="my logo img" /><b>Apna Store </b></h2>
      </NavLink>
      
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  
    .logo{
  width: 40px;
height: 30px;
margin-right: 16px;
}
  
`;
export default Header;
