import React from 'react';
import styled from "styled-components"
import { FirstCard } from "components/main/firstCard"
import { SecondCard } from 'components/main/secondCard';
import { ThirdCard } from 'components/main/thirdCard';

export const IndexPage = () => {
  return (
    <Container>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </Container >
  )
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;