import { Badge } from "@material-ui/core";
import { PetsOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: #e6cca9;
  color: #533535;
  font-weight: 500;

  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })};

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  padding: 2%;
  ${mobile({ width: "60px" })};

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px;
  ${mobile({ height: "26px", marginLeft: "15px" })};

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "space-between" })};

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  font-weight: bold;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="/pictures/HiDoggy.png" />
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <PetsOutlined />
            </Badge>
          </MenuItem>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search
              style={{ color: "gray", fontSize: "25px", marginLeft: "3%" }}
            />
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
