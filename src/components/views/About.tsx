"use client";
import useDeviceSize from "@/hooks/useDetectDeviceSize";
import { styled } from "styled-components";

const About = () => {
  const { isDesktop } = useDeviceSize();

  return (
    <Wrap>
      <AboutContainer>
        <AboutWrap>
          <TextWrap>
            <TextTitle>
              <span>UniqueAsset</span>
              <div className="line" />
            </TextTitle>

            <TextSub>
              A platform dedicated to evaluating and analyzing RWA projects,
              helping investors make professional and safe investment decisions.
            </TextSub>
          </TextWrap>
        </AboutWrap>

        <AboutImg
          src={isDesktop ? "/about.png" : "about.png"}
          alt="introduce"
        />

        <AboutWrap $isRight={true}>
          <TextWrap>
            <TextTitle>
              <span>Our Goal</span>
              <div className="line" />
            </TextTitle>

            <TextSub>
              To become a trusted certification authority in the RWA field,
              providing investors with reliable and assured information to
              prevent reckless investments.
            </TextSub>
          </TextWrap>
        </AboutWrap>
      </AboutContainer>
    </Wrap>
  );
};

export default About;

const Wrap = styled.section`
  width: 100%;
  padding: 150px 13.54vw; // 13.54

  @media screen and (max-width: 1024px) {
    padding: 80px 20px;
  }
`;

const AboutImg = styled.img`
  width: 72.65vw; // 1395px;
  height: 26.04vw; // 500px;

  @media screen and (max-width: 1024px) {
    width: 335px;
    height: 361px;
  }
`;

const AboutContainer = styled.div`
  width: 73.33vw; // 1408px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    gap: 48px;
  }
`;

const AboutWrap = styled.div<{ $isRight?: boolean }>`
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
  gap: 60px;

  @media screen and (max-width: 1024px) {
    width: 335px;
    padding: 0;
    gap: 40px;
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
  color: #0c0c0d;

  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 135%; /* 48.6px */
  letter-spacing: -0.72px;

  @media screen and (max-width: 1024px) {
    font-size: 21px;
  }
`;
