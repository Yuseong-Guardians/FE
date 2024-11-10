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
        <Table>
          <TableRow>
            <TableHeader>동명</TableHeader>
            <TableData>노은 1동</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>성명</TableHeader>
            <TableData>김노은</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>주민번호</TableHeader>
            <TableData>000000 - 0000000</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>기본 주소</TableHeader>
            <TableData>소</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>상세 주소</TableHeader>
            <TableData>주소</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>전입일</TableHeader>
            <TableData>2024.08.03</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>중단사유</TableHeader>
            <TableData>스테테</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>사유일시</TableHeader>
            <TableData>2001228</TableData>
          </TableRow>
          <TableRow>
            <TableHeader style={{ height: "100px" }}>비고</TableHeader>
            <TableData>2001228</TableData>
          </TableRow>
        </Table>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 37%;
  height: 100vh;
  background-color: #f6f6f6;
  border: 1px solid #B2B2B2;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
  & > div > img {
    cursor: pointer;
  }
`;

const Table = styled.div`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  font-size: 16px;
  color: #333;
  background-color: #f6f6f6;
`;

const TableRow = styled.div`
  display: flex;
  border: 1px solid #ddd;
`;

const TableHeader = styled.div`
  width: 20%;
  background-color: #f4f4f4;
  color: #333;
  background-color: #ECECEC;
  padding: 13px;
  text-align: left;
  border-right: 1px solid #ddd;
`;

const TableData = styled.div`
  flex: 1;
  padding: 15px;
  text-align: left;
`;