import React, { useState } from "react";
import { useInfoStore } from "store/useInfoStore";
import styled from "styled-components";

const banks = [
  { code: "001", name: "한국은행" },
  { code: "002", name: "산업은행" },
  { code: "003", name: "기업은행" },
  { code: "004", name: "국민은행" },
  { code: "007", name: "수협은행" },
  { code: "008", name: "수출입은행" },
  { code: "011", name: "농협은행" },
  { code: "020", name: "우리은행" },
  { code: "023", name: "SC제일은행" },
  { code: "027", name: "한국씨티은행" },
  { code: "031", name: "대구은행" },
  { code: "032", name: "부산은행" },
  { code: "034", name: "광주은행" },
  { code: "035", name: "제주은행" },
  { code: "037", name: "전북은행" },
  { code: "039", name: "경남은행" },
  { code: "045", name: "새마을금고중앙회" },
  { code: "048", name: "신협" },
  { code: "050", name: "상호저축은행" },
  { code: "051", name: "기타 외국계 은행(중국 교통은행 등)" },
  { code: "052", name: "모간스탠리은행" },
  { code: "054", name: "HSBC은행" },
  { code: "055", name: "도이치은행" },
  { code: "057", name: "제이피모간체이스은행" },
  { code: "058", name: "미스호은행" },
  { code: "059", name: "미쓰비도쿄UFJ은행" },
  { code: "060", name: "BOA은행" },
  { code: "061", name: "비엔피파리바은행" },
  { code: "062", name: "중국공상은행" },
  { code: "063", name: "중국은행" },
  { code: "064", name: "산립조합중앙회" },
  { code: "065", name: "대화은행" },
  { code: "067", name: "중국건설은행" },
  { code: "071", name: "우체국" },
  { code: "076", name: "신용보증기금" },
  { code: "077", name: "신용보증기금" },
  { code: "081", name: "KEB하나은행" },
  { code: "088", name: "신한은행" },
  { code: "089", name: "케이뱅크" },
  { code: "090", name: "카카오뱅크" },
  { code: "092", name: "토스뱅크" },
  { code: "093", name: "한국주택금융공사" },
  { code: "094", name: "서울보증보험" },
  { code: "209", name: "유안타증권" },
  { code: "218", name: "KB증권" },
  { code: "221", name: "상상인증권" },
  { code: "223", name: "리딩투자증권" },
  { code: "271", name: "토스증권" },
  { code: "278", name: "신한금융투자" },
  { code: "279", name: "DB금융투자" },
  { code: "280", name: "유진투자증권" },
  { code: "287", name: "메리츠종합금융증권" },
  { code: "288", name: "카카오페이증권" },
  { code: "289", name: "NH투자증권" },
  { code: "290", name: "부국증권" },
  { code: "291", name: "신영증권" },
  { code: "292", name: "케이프투자증권" },
  { code: "294", name: "한국포스증권" },
];

const location = [
  { name: "진잠동" },
  { name: "상대동" },
  { name: "원신흥동" },
  { name: "학하동" },
  { name: "온천1동" },
  { name: "온천2동" },
  { name: "노은1동" },
  { name: "노은2동" },
  { name: "노은3동" },
  { name: "신성동" },
  { name: "전민동" },
  { name: "관평동" },
  { name: "구즉동" },
];

const bankCategory = [
  { code: "10", name: "계좌이체" },
  { code: "20", name: "대량이체" },
  { code: "30", name: "원천징수" },
  { code: "40", name: "고지서" },
  { code: "50", name: "CMS" },
  { code: "60", name: "수표" },
  { code: "99", name: "현금" },
];

export const NewInfo = () => {
  const {
    selectedBank,
    selectedLocation,
    selectedBankCategory,
    bohunNumber,
    residentNumber,
    address1,
    address2,
    depositor,
    accountNumber,
    reason,
    entryDate,
    note,
    setField,
  } = useInfoStore();

  return (
    <Container>
      <Header>
        <p>
          신규자 정보
        </p>
        <AddButton>추가하기</AddButton>
      </Header>
      <Table>
        <tbody>
          <Row>
            <Label>동명</Label>
            <Dropdown value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="" disabled>동명을 선택하세요</option>
              {location.map((location) => (
                <option value={location.name} key={location.name}>{location.name}</option>
              ))}
            </Dropdown>
          </Row>
          <Row><Label>보훈번호</Label><Value placeholder="보훈번호를 입력하세요." /></Row>
          <Row><Label>주민번호</Label><Value placeholder="주민번호를 입력하세요." /></Row>
          <Row><Label>기본 주소</Label><Value placeholder="기본 주소를 입력하세요." /></Row>
          <Row><Label>상세 주소</Label><Value placeholder="상세 주소를 입력하세요." /></Row>
          <Row>
            <Label>입금유형</Label>
            <Dropdown value={selectedBankCategory} onChange={(e) => setSelectedBankCategory(e.target.value)}>
              <option value="" disabled>입금유형을 선택하세요</option>
              {bankCategory.map((gory) => (
                <option value={gory.code} key={gory.code}>{gory.code}: {gory.name}</option>
              ))}
            </Dropdown>
          </Row>
          <Row>
            <Label>은행명</Label>
            <Dropdown value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
              <option value="" disabled>은행을 선택하세요</option>
              {banks.map((bank) => (
                <option key={bank.code} value={bank.code}>
                  {bank.code}: {bank.name}
                </option>
              ))}
            </Dropdown>
          </Row>
          <Row><Label>예금주</Label><Value placeholder="예금주를 입력하세요." /></Row>
          <Row><Label>계좌번호</Label><Value placeholder="계좌번호를 입력하세요." /></Row>
          <Row><Label>신규 사유</Label><Value placeholder="신규 사유를 입력하세요." /></Row>
          <Row><Label>전입일</Label><Value placeholder="전입일을 입력하세요." /></Row>
          <Row style={{ height: "100px" }}><Label>비고</Label><Value placeholder="자유롭게 입력" /></Row>
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #dadada;
  background-color: #f6f6f6;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
`;

const AddButton = styled.button`
  color: #5f5f5f;
  background-color: #f6f6f6;
  border: 1px solid #5f5f5f;
  padding: 4px 30px;
  border-radius: 4px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr`
  border-bottom: 1px solid #dadada;
`;

const Label = styled.td`
  padding: 10px;
  font-weight: bold;
  background-color: #f4f4f4;
  width: 30%;
`;

const Value = styled.input`
  padding: 10px;
  width: 70%;
  border: none;
  background-color: #fff;
  font-size: 14px;
  color: #595959;
  outline: none;

  &:focus {
    border-bottom: 1px solid #2693e3;
  }
`;

const Dropdown = styled.select`
  padding: 10px;
  width: 95%;
  border: none;
  background-color: #fff;
  font-size: 14px;
  color: #595959;
  outline: none;

  &:focus {
    border-bottom: 1px solid #2693e3;
  }
`;
