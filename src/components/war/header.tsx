import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

type IProp = {
  isStopper: boolean,
  isWar: boolean,
}

export const Header = ({ isStopper, isWar }: IProp) => {
  const navigate = useNavigate();
  return (
    <Container>
      <LeftContainer isWar={isWar} onClick={() => navigate("/newComer")}>신규자</LeftContainer>
      <MiddleContainer isStopper={isStopper} onClick={() => navigate("/stopper")}>중지자</MiddleContainer>
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

const LeftContainer = styled.div<{ isWar?: boolean }>`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  ${({ isWar }) =>
    isWar &&
    css`
      background-color: #fff;
      color: #37A2FF;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.2);
    `}
`;

const MiddleContainer = styled.div<{ isStopper?: boolean }>`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;

  ${({ isStopper }) =>
    isStopper &&
    css`
      background-color: #fff;
      color: #37A2FF;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    `}
`;

const RightContainer = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`;
