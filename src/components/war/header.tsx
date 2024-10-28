import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <LeftContainer>신규자</LeftContainer>
      <MiddleContainer>중지자</MiddleContainer>
      <RightContainer>현황</RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #F6F6F6;
  color: #575656;
  font-size: 18px;
  font-weight: 400;
`;

const LeftContainer = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`;
