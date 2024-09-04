"use client";

import useDeviceSize from "@/hooks/useDetectDeviceSize";

import { styled } from "styled-components";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";
const Introduce = () => {
  const [lang] = useAtom(langAtom);
  const { isDesktop } = useDeviceSize();

  const obj: Record<
    Lang,
    Record<"title" | "description" | "button", string>
  > = {
    [Lang.ENG]: {
      title:
        "Start your RWA project evaluation and expert investment guidance with the UniqueAsset platform",
      description:
        "The UniqueAsset platform analyzes various RWA projects, providing safe and reliable investment information",
      button: "More View",
    },
    [Lang.KOR]: {
      title:
        "RWA 프로젝트 평가와 전문성 있는 투자 가이드, UniqueAsset 시작하세요.",
      description:
        "UniqueAsset플랫폼은 다양한 RWA 프로젝트를 분석하여, 안전하고 신뢰할 수 있는 투자 정보를 제공합니다.",
      button: "더 알아보기",
    },
  };

  return (
    <Wrap>
      <ItroduceImg src="/introduce.png" alt="introduce" />
      <ContentContainer>
        <TextTitle>{obj[lang].title}</TextTitle>

        <TextSub>{obj[lang].description}</TextSub>

        <MoreViewBtn>
          <span>{obj[lang].button}</span>
          <RightArrow src="/right_icon.png" alt="right_icon" />
        </MoreViewBtn>
      </ContentContainer>
    </Wrap>
  );
};

export default Introduce;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 50.52wv;
  border: 1px solid white;
  background: url("/introduce.png") lightgray 0% 0% / 100px 100px repeat;

  @media screen and (max-width: 1024px) {
    background: url("/introduce.png") lightgray -170.579px 15.025px / 185.642% 63.899%
        no-repeat,
      #000;
  }
`;

const ItroduceImg = styled.img`
  width: 100%;
  height: 50.52wv;

  border: 1px solid black;

  @media screen and (max-width: 1024px) {
    height: 779px;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 15.78vw;
  left: 13.54vw;

  color: white;

  @media screen and (max-width: 1024px) {
    margin-top: 390px;
  }
`;

const TextTitle = styled.p`
  width: 38.03vw;
  color: #fff;
  font-family: Inter;
  font-size: 2.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 115%; /* 57.5px */

  @media screen and (max-width: 1024px) {
    width: 315px;
    font-size: 27px;
  }
`;

const TextSub = styled.p`
  margin-top: 15px;
  width: 22.21vw;

  color: #bcbcbc;
  font-family: Inter;
  font-size: 0.93vw;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */

  @media screen and (max-width: 1024px) {
    width: 297px;
    font-size: 15px;
    line-height: 22px; /* 146.667% */
  }
`;

const MoreViewBtn = styled.button`
  margin-top: 56px;
  display: inline-flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 999px;
  background: #1855be;

  color: #fff;

  text-align: center;
  font-family: Inter;
  font-size: 0.833vw; // 16px
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.5px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-top: 30px;
  }
`;

const RightArrow = styled.img`
  width: 18px;
  height: 18px;
`;
