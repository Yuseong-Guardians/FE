import React from "react";
import styled from "styled-components";
import { BohoonSearchImg, CloseIcon, EditIcon, RefreshIcon } from "asset/img";

export const StopperInfo = () => {
  return (
    <Container>
      <BohoonSearch>
        <span>보훈 번호</span>
        <input type="text" />
        <img src={BohoonSearchImg} alt="" />
      </BohoonSearch>
      <MainWrapper>
        <SearchResult>
          <p>검색 결과</p>
          <div>
            <img src={RefreshIcon} alt="" />
            <img src={EditIcon} alt="" />
            <img src={CloseIcon} alt="" />
          </div>
        </SearchResult>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #f6f6f6;
`;


const BohoonSearch = styled.div`
  width: 100%;
  padding: 8px 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #007EFC;
  gap: 10px;
  & > input {
    width: 75%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #dadada;
  }
  & > img {
    cursor: pointer;
  }
`;

const MainWrapper = styled.div`
  
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  padding: 10px;
  color: #000;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;