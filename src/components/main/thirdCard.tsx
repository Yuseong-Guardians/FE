import React, { useState } from "react";
import styled from "styled-components";
import { MainCard3, AfterMainCard3 } from "asset/img";

export const ThirdCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <span>참전 명예 배우자</span>
      <img src={isHover ? AfterMainCard3 : MainCard3} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 27.725rem;
  height: 550px;
  border: 2px solid #ebebeb;
  background-color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
  font-size: 48px;
  padding: 23px 0 0 25px;
  cursor: pointer;
  color: #595959;
  & > img {
    position: absolute;
    left: 0.25px;
    top: 80px;
  }
  &:hover {
    border: 2px #72c3ff solid;
  }
  &:hover > img {
    filter: drop-shadow(1px 1px 50px rgba(0, 146, 252, 0.4));
  }
  &:hover > span {
    color: #2693e3;
  }
`;
