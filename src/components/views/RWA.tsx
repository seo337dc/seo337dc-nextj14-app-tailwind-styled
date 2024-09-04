"use client";
import { useState } from "react";
import { styled } from "styled-components";
import {
  engInteractoMethodology,
  engInteractoProvision,
  engInteractorCriertia,
  korInteractoMethodology,
  korInteractoProvision,
  korInteractorCriertia,
} from "../raw/constants";
import RwaInteractionInfo from "../raw/RwaInteractionInfo";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

const RWA = () => {
  const [lang] = useAtom(langAtom);
  const [opens, setOpens] = useState({
    Criteria: false,
    Methodology: false,
    Provision: false,
  });

  const obj: Record<
    Lang,
    Record<"title" | "subTitle" | "description", string>
  > = {
    [Lang.ENG]: {
      title: "Evaluation Methodology",
      subTitle: "RWA Project Evaluation Method",
      description: `UniqueAsset platform uses a combined methodology of quantitative
      analysis (e.g., financial statement analysis, profitability
      calculations) and qualitative analysis (e.g., industry analysis,
      risk assessment) to evaluate the value of RWA projects. We
      comprehensively analyze asset liquidity, legal stability, market
      demand and growth potential, profitability, and risk profile. Each
      project is rated on a scale from CCC to AAA, and we transparently
      guide our evaluation criteria and processes to ensure investors
      have trustworthy information.`,
    },
    [Lang.KOR]: {
      title: "Top-Rated RWA Projects",
      subTitle: "RWA 주요 프로젝트",
      description: `유니크 플랫폼에서 제공하는 주요 RWA 프로젝트 소개합니다.`,
    },
  };

  const isKor = lang === Lang.KOR;

  return (
    <Wrap>
      <RWAContainer>
        <RWAWrap>
          <TextWrap>
            <TextTitle>
              <span>{obj[lang].title}</span>
              <div className="line" />
            </TextTitle>

            <TextSub>{obj[lang].subTitle}</TextSub>
            <TextDesc>{obj[lang].description}</TextDesc>
          </TextWrap>
        </RWAWrap>
      </RWAContainer>

      <div className="mt-[135px] max-[1024px]:mt-[60px]">
        <InteractionLine />
        <InteractionWrap
          onClick={() => setOpens({ ...opens, Criteria: !opens.Criteria })}
        >
          <InteractionTop>
            <InteractionText>
              {isKor ? "평가 기준 Evaluation Criteria" : "Evaluation Criteria"}
            </InteractionText>{" "}
            <IconSvg src="/plus_icon.png" alt="plus" rotate={opens.Criteria} />
          </InteractionTop>
          {opens.Criteria && (
            <RwaInteractionInfo
              interactions={
                isKor ? korInteractorCriertia : engInteractorCriertia
              }
            />
          )}

          <InteractionLine />
        </InteractionWrap>

        <InteractionWrap
          onClick={() =>
            setOpens({ ...opens, Methodology: !opens.Methodology })
          }
        >
          <InteractionTop>
            <InteractionText>
              {isKor
                ? "분석 방법론 Evaluation Methodology"
                : "Evaluation Methodology"}
            </InteractionText>{" "}
            <IconSvg
              src="/plus_icon.png"
              alt="plus"
              rotate={opens.Methodology}
            />
          </InteractionTop>

          {opens.Methodology && (
            <RwaInteractionInfo
              interactions={
                isKor ? korInteractoMethodology : engInteractoMethodology
              }
            />
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
              interactions={
                isKor ? korInteractoProvision : engInteractoProvision
              }
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
