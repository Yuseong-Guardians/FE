import React from "react";
import styled from "styled-components";

const data = [
  {
    no: 1,
    district: "노은 1동",
    date: "2024.09.10",
    id: "123",
    name: "123",
    ssn: "9999999999999",
    address: "11 11",
    bank: "002: 산업은행",
    accountHolder: "123",
    accountNumber: "11111111111",
    reason: "전입",
    moveInDate: "2001.01.01",
    notes: "자유롭게 입력",
  },
];


export const BaseTable = () => {
  return (
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
          <Th>비고</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{row.no}</Td>
            <Td>{row.district}</Td>
            <Td>{row.date}</Td>
            <Td>{row.id}</Td>
            <Td>{row.name}</Td>
            <Td>{row.ssn}</Td>
            <Td>{row.address}</Td>
            <Td>{row.bank}</Td>
            <Td>{row.accountHolder}</Td>
            <Td>{row.accountNumber}</Td>
            <Td>{row.reason}</Td>
            <Td>{row.moveInDate}</Td>
            <Td>{row.notes}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

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
