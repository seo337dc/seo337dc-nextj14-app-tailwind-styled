"use client";

import { styled } from "styled-components";

const Feature = () => {
  return (
    <Wrap>
      <FeatureContainer>
        <FeatureWrap>
          <TextWrap>
            <TextTitle>
              <span>Key Features</span>
              <div className="line" />
            </TextTitle>

            <TextSub>Platform Key Features</TextSub>
          </TextWrap>
        </FeatureWrap>
      </FeatureContainer>

      <div className="mt-[215px] flex gap-[34px] max-[1024px]:flex-col max-[1024px]:mt-[79px]">
        <FeatureCard>
          <div className="flex gap-1">
            <span>1.</span>
            <div>
              <p>RWA Project</p>
              <FeatureSub>Search and Evaluation</FeatureSub>
            </div>
          </div>

          <FeatureImg src="/feature_rwa.png" alt="feature_rwa" />
          <FeatureDesc>
            Users can search for RWA projects of interest and check their
            evaluation grades and detailed information, including project value
            assessments, analysis methods, and related reports.
          </FeatureDesc>
        </FeatureCard>

        <FeatureCard>
          <div className="flex gap-1">
            <span>2.</span>
            <div>
              <p>Real-time Evaluation</p>
              <FeatureSub>Updates and Monitoring</FeatureSub>
            </div>
          </div>

          <FeatureImg src="/feature_monitoring.png" alt="feature_monitoring" />
          <FeatureDesc>
            The status and ratings of evaluated RWA projects are updated in
            real-time, allowing users to monitor and make optimal investment
            decisions.
          </FeatureDesc>
        </FeatureCard>

        <FeatureCard>
          <div className="flex gap-1">
            <span>3.</span>
            <div>
              <p>Customized Investment </p>
              <FeatureSub>Analysis and Recommendations</FeatureSub>
            </div>
          </div>

          <FeatureImg src="/feature_custom.png" alt="feature_custom" />
          <FeatureDesc>
            Users receive customized analysis reports tailored to their
            investment preferences, along with investment recommendations based
            on these reports.
          </FeatureDesc>
        </FeatureCard>
      </div>
    </Wrap>
  );
};

export default Feature;

const Wrap = styled.section`
  width: 100%;
  padding: 150px 13.54vw; // 13.54

  @media screen and (max-width: 1024px) {
    padding: 80px 20px;
  }
`;

const FeatureContainer = styled.div`
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

const FeatureWrap = styled.div<{ $isRight?: boolean }>`
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
    width: 280px;
    font-family: Inter;
    font-size: 33px;
    line-height: 43px; /* 130.303% */
    letter-spacing: -1.32px;
  }
`;

const FeatureCard = styled.div`
  width: 23.12vw; // 444px;
  font-size: 20px;
  line-height: 28px; /* 140% */

  @media screen and (max-width: 1024px) {
    width: 100%;
    line-height: 25px;
  }
`;

const FeatureSub = styled.p`
  font-size: 20px;
  color: #1855be;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
`;

const FeatureImg = styled.img`
  width: 100%;
  height: 7.86vw; // 151px;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    height: 151px;
    margin-top: 10px;
  }
`;

const FeatureDesc = styled.p`
  color: #4d4d4d;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }
`;
