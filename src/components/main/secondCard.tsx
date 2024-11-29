import React, { useState } from "react";
import styled from "styled-components";
import { MainCard2, AfterMainCard2 } from "asset/img";

export const SecondCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>보훈 예우</span>
      <img src={isHover ? AfterMainCard2 : MainCard2} alt='' />
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
    left: -5px;
    top: -12px;
    position: absolute;
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
