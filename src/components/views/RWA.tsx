"use client";
import { useState } from "react";
import { styled } from "styled-components";
import {
  engInteractoMethodology,
  engInteractoProvision,
  engInteractorCriertia,
} from "../raw/constants";
import RwaInteractionInfo from "../raw/RwaInteractionInfo";

const RWA = () => {
  const [opens, setOpens] = useState({
    Criteria: false,
    Methodology: false,
    Provision: false,
  });

  return (
    <Wrap>
      <RWAContainer>
        <RWAWrap>
          <TextWrap>
            <TextTitle>
              <span>Evaluation Methodology</span>
              <div className="line" />
            </TextTitle>

            <TextSub>RWA Project Evaluation Method</TextSub>
            <TextDesc>
              UniqueAsset platform uses a combined methodology of quantitative
              analysis (e.g., financial statement analysis, profitability
              calculations) and qualitative analysis (e.g., industry analysis,
              risk assessment) to evaluate the value of RWA projects. We
              comprehensively analyze asset liquidity, legal stability, market
              demand and growth potential, profitability, and risk profile. Each
              project is rated on a scale from CCC to AAA, and we transparently
              guide our evaluation criteria and processes to ensure investors
              have trustworthy information.
            </TextDesc>
          </TextWrap>
        </RWAWrap>
      </RWAContainer>

      <div className="mt-[135px] max-[1024px]:mt-[60px]">
        <InteractionLine />
        <InteractionWrap
          onClick={() => setOpens({ ...opens, Criteria: !opens.Criteria })}
        >
          <InteractionTop>
            <InteractionText>Evaluation Criteria</InteractionText>{" "}
            <IconSvg src="/plus_icon.png" alt="plus" rotate={opens.Criteria} />
          </InteractionTop>
          {opens.Criteria && (
            <RwaInteractionInfo interactions={engInteractorCriertia} />
          )}

          <InteractionLine />
        </InteractionWrap>

        <InteractionWrap
          onClick={() =>
            setOpens({ ...opens, Methodology: !opens.Methodology })
          }
        >
          <InteractionTop>
            <InteractionText>Evaluation Methodology</InteractionText>{" "}
            <IconSvg
              src="/plus_icon.png"
              alt="plus"
              rotate={opens.Methodology}
            />
          </InteractionTop>

          {opens.Methodology && (
            <RwaInteractionInfo interactions={engInteractoMethodology} />
          )}
          <InteractionLine />
        </InteractionWrap>

        <InteractionWrap
          onClick={() => setOpens({ ...opens, Provision: !opens.Provision })}
        >
          <InteractionTop>
            <InteractionText className="max-[1024px]:w-[184px] max-[1024px]:leading-7">
              Report Writing & Information Provision
            </InteractionText>{" "}
            <IconSvg src="/plus_icon.png" alt="plus" rotate={opens.Provision} />
          </InteractionTop>

          {opens.Provision && (
            <RwaInteractionInfo
              interactions={engInteractoProvision}
              disalbeDot={true}
            />
          )}
          <InteractionLine />
        </InteractionWrap>
      </div>
    </Wrap>
  );
};

export default RWA;

const Wrap = styled.section`
  width: 100%;
  padding: 150px 13.54vw; // 13.54
  background: #fafafa;

  @media screen and (max-width: 1024px) {
    padding: 80px 20px;
  }
`;

const RWAContainer = styled.div`
  width: 73.33vw; // 1408px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const RWAWrap = styled.div<{ $isRight?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: ${({ $isRight }) => ($isRight ? "flex-end" : "flex-start")};

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TextWrap = styled.div`
  width: 825px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 335px;
    padding: 0 20px;
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
  /* text-transform: capitalize; */

  .line {
    margin-top: 12px;
    width: 130px;
    border: 1px solid black;
  }
`;

const TextSub = styled.div`
  margin-top: 15px;

  color: #000;

  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-family: Inter;
    font-size: 33px;
    line-height: 43px; /* 130.303% */
    letter-spacing: -1.32px;
  }
`;

const TextDesc = styled.div`
  margin-top: 36px;
  width: 61.25vw; // 1176px;
  color: #4d4d4d;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 168.75% */
  text-transform: capitalize;
  overflow-wrap: break-word; /* 어절이 너무 길 경우 줄바꿈 */

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    font-size: 15px;
  }
`;

const InteractionLine = styled.div`
  width: 100%;
  border-top: 1px solid #dbdbdb;
`;

const InteractionWrap = styled.div`
  width: 100%;
  cursor: pointer;
`;

const InteractionTop = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InteractionText = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -1.2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const IconSvg = styled.img<{ rotate: boolean }>`
  width: 58px; // 3.02vw; //58px;
  height: 58px; // 동일한 크기로 설정
  cursor: pointer;
  transition: transform 0.3s; // 부드러운 트랜지션 효과

  /* 조건에 따른 회전 */
  transform: ${({ rotate }) => (rotate ? "rotate(45deg)" : "rotate(0)")};

  @media screen and (max-width: 1024px) {
    width: 44px;
    height: 44px;
  }
`;

const InteractionContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-self: stretch;
`;

const InteractionInfoWrap = styled.div`
  padding: 45px 35px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  width: 67.7vw; // 1300px;
  align-items: flex-start;
  gap: 12px;

  .title {
    width: 13.02vw; // 250px;
    color: #484848;

    font-family: Inter;
    font-size: 17px; // 0.88vw; // 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 141.176%; //  24px; /* 141.176% */
    letter-spacing: -0.51px;
    text-transform: capitalize;
  }

  .description {
    width: 52.86vw;
    color: #656565;
    font-family: Inter;
    font-size: 15px; // 0.78vw; // 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; // 24px; /* 160% */
    letter-spacing: -0.15px;
    text-transform: capitalize;
  }
`;
