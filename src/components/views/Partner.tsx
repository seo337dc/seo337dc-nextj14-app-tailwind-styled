"use client";

import styled, { keyframes } from "styled-components";

type TLogos = {
  src: string;
  alt: string;
};
const paternsLogos: TLogos[] = [
  { src: "partner_desert.png", alt: "partner_desert" },
  { src: "partner_gate.png", alt: "partner_gate" },
  { src: "partner_flow.png", alt: "partner_flow" },
  { src: "partner_manna.png", alt: "partner_manna" },
  { src: "partner_filecoin.png", alt: "partner_filecoin" },
  { src: "partner_klaytn.png", alt: "partner_klaytn" },
  { src: "patner_busan.png", alt: "patner_busan" },
  { src: "partner_heesung.png", alt: "partner_heesung" },
];

const PartnerSection = () => {
  return (
    <Wrap>
      <TextSection>
        <TextWrap>
          <TextTitle>
            <span className="">Partners & Collaborations Section</span>
            <div className="line" />
          </TextTitle>

          <TextSub>
            List logos of major partners and institutions collaborating with the
            Unique Asset platform.
          </TextSub>
        </TextWrap>
      </TextSection>

      <LogoContainer>
        {paternsLogos
          .concat(paternsLogos.concat(paternsLogos.concat(paternsLogos)))
          .map((logo, i) => (
            <LogoWrap key={`${logo.src}_${i}`}>
              <LogoImg src={logo.src} alt={logo.alt} />
            </LogoWrap>
          ))}
      </LogoContainer>
    </Wrap>
  );
};

export default PartnerSection;

const Wrap = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0; // 13.54

  @media screen and (max-width: 1024px) {
    padding: 80px 30px;
  }
`;

const TextSection = styled.div`
  padding: 0 260px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

const TextTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  color: #000;

  font-family: Inter;
  font-size: 16px; // 0.833vw; // 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 114%; /* 18.24px */
  letter-spacing: -0.64px;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }

  .line {
    margin-top: 12px;
    width: 130px;
    border: 1px solid black;
  }
`;

const TextSub = styled.div`
  width: 34.37vw;
  margin-top: 15px;
  color: #0c0c0d;

  font-family: Pretendard;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 600;
  line-height: 2.86vw; // 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    width: 303px;
    font-family: Inter;
    font-size: 25px;
    line-height: 32px; /* 128% */
    letter-spacing: -1.32px;
  }
`;

// 로고 슬라이드 애니메이션을 정의
const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); // 반복되는 로고의 너비에 따라 조절
  }
`;

const LogoContainer = styled.div`
  width: calc(200px * 20); // 각 로고의 너비 * 로고 개수
  overflow: hidden;
  display: flex;
  padding: 62px 36px;
  justify-content: center;
  align-items: center;
  gap: 36px;
  flex-shrink: 0;
  background: #f9f9f9;

  // 애니메이션 적용
  animation: ${slideAnimation} 30s linear infinite;

  margin-top: 75px;

  @media screen and (max-width: 1024px) {
    margin-top: 56px;
    height: 80px;
    padding: 20px 10px;
    gap: 5px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  width: 200px;
  height: 82px;
  padding: 27px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  min-width: 130px;
  min-height: 30px;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 20px;
  }
`;
