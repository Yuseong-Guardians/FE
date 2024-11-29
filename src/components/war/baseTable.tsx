import React, { useEffect } from "react";
import styled from "styled-components";
import { useGetHonor } from "apis";

// const data = [
//   {
//     no: 1,
//     selectedLocation: "노은 1동",
//     date: "2024.09.10",
//     bohoonNumber: "123",
//     name: "지도현",
//     juminNumber: "999999-9999999",
//     basicAddress: "11 11",
//     bankName: "002: 산업은행",
//     accountHolder: "123",
//     accountNumber: "계좌번호",
//     reason: "전입",
//     entryDate: "2001.01.01",
//     remarks: "자유롭게 입력",
//   },
// ];

export const BaseTable = () => {
  const { data: honorData, refetch } = useGetHonor();

  useEffect(() => {
    refetch();
  }, []);

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
          {honorData?.map((data, index) => (
            <tr key={index}>
              <Td>{index}</Td>
              <Td>{data.dong_name}</Td>
              <Td>{data.transfer_date}</Td>
              <Td>{data.honor_number}</Td>
              <Td>{data.name}</Td>
              <Td>{data.resident_number}</Td>
              <Td>{data.deposit_type}</Td>
              <Td>{data.bank_list}</Td>
              <Td>{data.depositor_name}</Td>
              <Td>{data.account_number}</Td>
              <Td>{data.new_reason}</Td>
              <Td>{data.transfer_date}</Td>
              <Td style={{ width: "20%", textAlign: "start" }}>{data.notes}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
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
  color: #706f6f;
  border: 1px solid #dadada;
  font-weight: 500;
  cursor: pointer;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dadada;
  text-align: center;
  color: #000;
  font-weight: 500;
`;
