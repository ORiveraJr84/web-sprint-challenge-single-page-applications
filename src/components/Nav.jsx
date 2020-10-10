import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div``;

const Nav = () => {
  return (
    <NavWrapper>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
      </nav>
    </NavWrapper>
  );
};

export default Nav;
