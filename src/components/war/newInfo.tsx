import { HonorRegistrationRequest, usePostHonorRegistration } from "apis";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import styled from "styled-components";

const banks = [
  { key: "1", name: "001: 한국은행" },
  { key: "2", name: "002: 산업은행" },
  { key: "3", name: "003: 기업은행" },
  { key: "4", name: "004: 국민은행" },
  { key: "5", name: "007: 수협은행" },
  { key: "6", name: "008: 수출입은행" },
  { key: "7", name: "011: 농협은행" },
  { key: "8", name: "020: 우리은행" },
  { key: "9", name: "023: SC제일은행" },
  { key: "10", name: "027: 한국씨티은행" },
  { key: "11", name: "031: 대구은행" },
  { key: "12", name: "032: 부산은행" },
  { key: "13", name: "034: 광주은행" },
  { key: "14", name: "035: 제주은행" },
  { key: "15", name: "037: 전북은행" },
  { key: "16", name: "039: 경남은행" },
  { key: "17", name: "045: 새마을금고중앙회" },
  { key: "18", name: "048: 신협" },
  { key: "19", name: "050: 상호저축은행" },
  { key: "20", name: "051: 기타 외국계 은행(중국 교통은행 등)" },
  { key: "21", name: "052: 모간스탠리은행" },
  { key: "22", name: "054: HSBC은행" },
  { key: "23", name: "055: 도이치은행" },
  { key: "24", name: "057: 제이피모간체이스은행" },
  { key: "25", name: "058: 미스호은행" },
  { key: "26", name: "059: 미쓰비도쿠UFJ은행" },
  { key: "27", name: "060: BOA은행" },
  { key: "28", name: "061: 비엔피파리바은행" },
  { key: "29", name: "062: 중국공상은행" },
  { key: "30", name: "063: 중국은행" },
  { key: "31", name: "064: 산립조합중앙회" },
  { key: "32", name: "065: 대화은행" },
  { key: "33", name: "067: 중국건설은행" },
  { key: "34", name: "071: 우체국" },
  { key: "35", name: "076: 신용보증기금" },
  { key: "36", name: "077: 신용보증기금" },
  { key: "37", name: "081: KEB하나은행" },
  { key: "38", name: "088: 신한은행" },
  { key: "39", name: "089: 케이뱅크" },
  { key: "40", name: "090: 카카오뱅크" },
  { key: "41", name: "092: 토스뱅크" },
  { key: "42", name: "093: 한국주택금융공사" },
  { key: "43", name: "094: 서울보증보험" },
  { key: "44", name: "209: 유안타증권" },
  { key: "45", name: "218: KB증권" },
  { key: "46", name: "221: 상상인증권" },
  { key: "47", name: "223: 리딩투자증권" },
  { key: "48", name: "271: 토스증권" },
  { key: "49", name: "278: 신한금융투자" },
  { key: "50", name: "279: DB금융투자" },
  { key: "51", name: "280: 유진투자증권" },
  { key: "52", name: "287: 메리츠종합금융증권" },
  { key: "53", name: "288: 카카오페이증권" },
  { key: "54", name: "289: NH투자증권" },
  { key: "55", name: "290: 부국증권" },
  { key: "56", name: "291: 신영증권" },
  { key: "57", name: "292: 케이프투자증권" },
  { key: "58", name: "294: 한국포스증권" },
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
  { key: "1", name: "10: 계좌이체" },
  { key: "2", name: "20: 대량이체" },
  { key: "3", name: "30: 원천징수" },
  { key: "4", name: "40: 고지서" },
  { key: "5", name: "50: CMS" },
  { key: "6", name: "60: 수표" },
  { key: "7", name: "99: 현금" },
];

export const NewInfo = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  const { mutate: postHonorRegistration } = usePostHonorRegistration();

  const handleFormSubmit = (formData: HonorRegistrationRequest) => {
    postHonorRegistration(formData);
    console.log(formData);
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Header>
          <p>신규자 정보</p>
          <AddButton type='submit'>추가하기</AddButton>
        </Header>
        <Table>
          <tbody>
            <Row>
              <Label>동명</Label>
              <Dropdown {...register("dong_name", { required: true })}>
                <option value='' disabled>
                  동명을 선택하세요
                </option>
                {location.map(loc => (
                  <option value={loc.name} key={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </Dropdown>
            </Row>
            <Row>
              <Label>보훈번호</Label>
              <Value
                {...register("honor_number", { required: true })}
                placeholder='보훈번호를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>성명</Label>
              <Value
                {...register("name", { required: true })}
                placeholder='이름 입력하세요.'
              />
            </Row>
            <Row>
              <Label>주민번호</Label>
              <Value
                {...register("resident_number", { required: true })}
                placeholder='주민번호를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>기본 주소</Label>
              <Value
                {...register("address", { required: true })}
                placeholder='기본 주소를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>상세 주소</Label>
              <Value
                {...register("detail_address", { required: true })}
                placeholder='상세 주소를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>입금유형</Label>
              <Dropdown {...register("deposit_type", { required: true })}>
                <option value='' disabled>
                  입금유형을 선택하세요
                </option>
                {bankCategory.map(category => (
                  <option value={category.name} key={category.key}>
                    {category.name}
                  </option>
                ))}
              </Dropdown>
            </Row>
            <Row>
              <Label>은행명</Label>
              <Dropdown {...register("bank_list", { required: true })}>
                <option value='' disabled>
                  은행을 선택하세요
                </option>
                {banks.map(bank => (
                  <option value={bank.name} key={bank.key}>
                    {bank.name}
                  </option>
                ))}
              </Dropdown>
            </Row>
            <Row>
              <Label>예금주</Label>
              <Value
                {...register("depositor_name", { required: true })}
                placeholder='예금주를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>계좌번호</Label>
              <Value
                {...register("account_number", { required: true })}
                placeholder='계좌번호를 입력하세요. (예: 7777021234567)'
              />
            </Row>
            <Row>
              <Label>신규 사유</Label>
              <Value
                {...register("new_reason", { required: true })}
                placeholder='신규 사유를 입력하세요.'
              />
            </Row>
            <Row>
              <Label>전입일</Label>
              <Value
                {...register("transfer_date", { required: true })}
                placeholder='YYYYMMYY 형식으로 입력하세요'
              />
            </Row>
            <Row style={{ height: "100px" }}>
              <Label>비고</Label>
              <Value
                {...register("notes", { required: true })}
                placeholder='자유롭게 입력하세요'
              />
            </Row>
          </tbody>
        </Table>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #f6f6f6;
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
  background-color: #ffffff;
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
  width: 100%;
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
