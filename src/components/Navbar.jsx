import { Badge } from "@material-ui/core";
import { PetsOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #e6cca9;
  color: #533535;
  font-weight: 500;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  font-weight: bold;
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
            <Input />
            <Search style={{ color: "gray", fontSize: "25px", marginLeft: "3%"}} />
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
