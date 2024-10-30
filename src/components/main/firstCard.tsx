import React, { useState } from "react";
import styled from "styled-components";
import { MainCard1, AfterMainCard1 } from "asset/img";
import { useNavigate } from "react-router-dom";

export const FirstCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/newComer")}
    >
      <span>참전 명예</span>
      <img src={isHovered ? AfterMainCard1 : MainCard1} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 27.725rem;
  height: 550px;
  border: 2px solid #ebebeb;
  background-color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
  font-size: 48px;
  padding: 23px 0 0 25px;
  color: #595959;
  cursor: pointer;
  &:hover {
    border: 2px #72c3ff solid;
  }
  &:hover > img {
    filter: drop-shadow(1px 1px 50px rgba(0, 146, 252, 0.4));

  }
  &:hover > span {
    color: #2693E3;
  }
`;