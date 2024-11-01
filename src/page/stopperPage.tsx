import { Header } from "components/war/header";
import { StopperInfo } from "components/war/stopperInfo";
import React from "react";
import styled from "styled-components";

export const StopperPage = () => {
  return (
    <Container>
      <Header isStopper={true} isWar={false} />
      <div
        style={{
          width: "100%",
          border: "1px solid #dadada",
          height: "50px",
          backgroundColor: "#ffffff",
          color: "#000",
          fontSize: "18px",
          fontWeight: "400",
          padding: "14px",
          zIndex: "1",
        }}>참전 명예 수당 지급 중지자</div>
      <StopperInfo />
    </Container>
  );
};

const Container = styled.div``;