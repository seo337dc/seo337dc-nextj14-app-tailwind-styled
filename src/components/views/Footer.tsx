"use client";

import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <NewsWrap>
        <NewsTitle>Newsletter</NewsTitle>
        <NewsDesc>
          We will send you the latest RWA evaluation updates and investment
          information via email
        </NewsDesc>

        <EmailInputWrap>
          <InputTitle>Email</InputTitle>
          <EmailInput />
          <SubBtn>Subscribe</SubBtn>
        </EmailInputWrap>
      </NewsWrap>
      <ConcatWrap>
        <MenuWrap>
          <LogoWrap>
            <LogoImg src="/logo.png" alt="logo" />
            <LogoTitle>UNIQUE ASSET</LogoTitle>
          </LogoWrap>

          <MenuContainer>
            <span className="text">About</span>
            <span className="text">Methodology</span>
            <span className="text">Key Feature</span>
            <span className="text">Project</span>
          </MenuContainer>

          <SocialContainer>
            <SocialImg />
            <SocialImg />
            <SocialImg />
          </SocialContainer>
        </MenuWrap>

        <FooterTitle>
          Copyright 2024 Unique Asset CO., LTD. All Right Reserved.
        </FooterTitle>
      </ConcatWrap>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  padding: 7.81vw 5.72vw 1.35vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8.43vw; //  162px;
  background: #3b3b47;
`;

const NewsWrap = styled.div`
  width: 45.14vw; // 790px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const NewsTitle = styled.p`
  color: #fff;

  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-size: 35px;
    height: 52.606px;
  }
`;

const NewsDesc = styled.p`
  margin-top: 18px;
  color: #bfc1d5;

  text-align: center;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 147.368% */
  letter-spacing: -0.38px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    width: 325px;
    font-size: 15px;
  }
`;

const EmailInputWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InputTitle = styled.p`
  color: #fff;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.28px;
`;

const EmailInput = styled.input`
  /* width: 272px; */
  width: 14.16vw;
  display: flex;
  padding: 0.52vw 0.72vw;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d0d5dd);
  background: var(--White, #fff);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px 14px;
  }
`;

const SubBtn = styled.button`
  display: flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #1855be;

  color: #fff;

  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: -0.5px;
`;

const ConcatWrap = styled.div`
  width: 88.54vw; // 1700px;
  height: 6.97vw; // 134px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 4px;
`;

const LogoImg = styled.img`
  width: 55px;
  height: 44px;
`;

const LogoTitle = styled.p`
  width: 80px;
  color: #fff;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 105% */
  letter-spacing: -0.6px;
`;

const MenuWrap = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    /* gap: 18px; */
  }
`;

const MenuContainer = styled.div`
  display: flex;
  width: 650px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 70px;
  flex-shrink: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  .text {
    color: #fff;

    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
    letter-spacing: -0.3px;
  }
`;

const SocialContainer = styled.div`
  width: 112.8px;
  height: 33.6px;
  flex-shrink: 0;
  display: flex;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    padding: 18px 0;
    height: auto;
  }
`;

const SocialImg = styled.div`
  width: 33px;
  height: 33px;

  border-radius: 50%;
  background-color: #313238;
`;

const FooterTitle = styled.div`
  text-align: center;
  width: 465px;
  height: 27px;
  flex-shrink: 0;

  color: #8d9095;

  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;
