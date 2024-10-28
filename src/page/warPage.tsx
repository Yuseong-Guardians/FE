import { Header } from "components/war/header";
import { NewInfo } from "components/war/newInfo";
import { BaseTable } from "components/war/baseTable";
import React from "react";
import styled from "styled-components";

export const WarPage = () => {
  return (
    <Container>
      <Header />
      <div
        style={{
          width: "100%",
          border: "1px solid #ececec",
          height: "50px",
          backgroundColor: "#ffffff",
          color: "#000",
          fontSize: "18px",
          fontWeight: "400",
          padding: "14px"
        }}>참전 명예 수당 지급 신규자</div>
      <div style={{ display: "flex" }}>
        <NewInfo />
        <BaseTable />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;