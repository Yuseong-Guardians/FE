import React from "react";
import styled from "styled-components";

const data = [
  {
    no: 1,
    selectedLocation: "노은 1동",
    date: "2024.09.10",
    bohoonNumber: "123",
    name: "지도현",
    juminNumber: "999999-9999999",
    basicAddress: "11 11",
    bankName: "002: 산업은행",
    accountHolder: "123",
    accountNumber: "계좌번호",
    reason: "전입",
    entryDate: "2001.01.01",
    remarks: "자유롭게 입력",
  }
];

export const BaseTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>순번</Th>
            <Th>동명</Th>
            <Th>입력날짜</Th>
            <Th>보훈번호</Th>
            <Th>성명</Th>
            <Th>주민번호</Th>
            <Th>주소</Th>
            <Th>은행명</Th>
            <Th>예금주</Th>
            <Th>계좌번호</Th>
            <Th>신규사유</Th>
            <Th>전입날짜</Th>
            <Th style={{ textAlign: "start" }}>비고</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <Td>{row.no}</Td>
              <Td>{row.selectedLocation}</Td>
              <Td>{row.date}</Td>
              <Td>{row.bohoonNumber}</Td>
              <Td>{row.name}</Td>
              <Td>{row.juminNumber}</Td>
              <Td>{row.basicAddress}</Td>
              <Td>{row.bankName}</Td>
              <Td>{row.accountHolder}</Td>
              <Td>{row.accountNumber}</Td>
              <Td>{row.reason}</Td>
              <Td>{row.entryDate}</Td>
              <Td style={{ width: "20%", textAlign: "start" }}>{row.remarks}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// 스타일 정의
const TableContainer = styled.div`
  width: 100%;
  max-height: 90vh;  /* 테이블 높이 고정 */
  overflow-y: auto;   /* 세로 스크롤 추가 */
  border: 1px solid #dadada;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #fff;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #f4f4f4;
  color: #706F6F;
  border: 1px solid #dadada;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dadada;
  text-align: center;
  color: #000;
  font-weight: 500;
`;
