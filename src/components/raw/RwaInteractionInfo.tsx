"use client";
import { styled } from "styled-components";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

export type TInteractionInfo = {
  title: string;
  title_eng?: string;
  description1: string;
  description2: string;
  description3?: string;
};

type TProps = {
  interactions: TInteractionInfo[];
  disalbeDot?: boolean;
};
const RwaInteractionInfo = ({ interactions, disalbeDot }: TProps) => {
  const [lang] = useAtom(langAtom);

  const isKor = lang === Lang.KOR;
  return (
    <InteractionContainer>
      {interactions.map((interaction, index) => (
        <InteractionInfoWrap key={`${interaction.title}_${index}`}>
          {isKor ? (
            <KorTitle>
              <span className="title_kr">{interaction.title}</span>
              <span className="title_eng">{interaction.title_eng}</span>
            </KorTitle>
          ) : (
            <span className="title">{interaction.title}</span>
          )}

          <DescContainer $disableDot={disalbeDot}>
            <p className="description">{interaction.description1}</p>
            <p className="description">{interaction.description2}</p>
            {interaction.description3 && (
              <p className="description">{interaction.description3}</p>
            )}
          </DescContainer>
        </InteractionInfoWrap>
      ))}
    </InteractionContainer>
  );
};

export default RwaInteractionInfo;

const InteractionContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  background: #f2f2f2;
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const InteractionInfoWrap = styled.div`
  padding: 45px 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  width: 67.7vw; // 1300px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 45px 0 45px 20px;
  }

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
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const DescContainer = styled.div<{ $disableDot?: boolean }>`
  width: 52.86vw;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin-left: ${(props) => (props.$disableDot ? "0" : "10px")};
  }

  .description {
    color: #656565;
    font-family: Inter;
    font-size: 15px; // 0.78vw; // 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; // 24px; /* 160% */
    letter-spacing: -0.15px;
    text-transform: capitalize;
    position: relative;

    @media screen and (max-width: 1024px) {
      width: 100%;
      &::before {
        content: ${(props) =>
          props.$disableDot ? '""' : '"•"'}; // 조건부 콘텐츠 설정
        position: absolute;
        left: -15px; // Adjust this value based on your layout
        top: 0;
        color: #656565; // You can change the color of the dot
      }
    }
  }
`;

const KorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 250px;

  .title_kr {
    color: #000;

    font-family: Pretendard;
    font-size: 1.26vw; //30px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.458vw; // 28px; /* 93.333% */
    letter-spacing: -0.6px;
    text-transform: capitalize;
    @media screen and (max-width: 1024px) {
      font-size: 15px;
      width: 100%;
    }
  }

  .title_eng {
    color: #8d9095;

    font-family: Pretendard;
    font-size: 1.041vw; // 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.458vw; // 28px; /* 140% */
    letter-spacing: -0.6px;
    text-transform: capitalize;

    @media screen and (max-width: 1024px) {
      margin-top: 5px;
      font-size: 15px;
    }
  }
`;
