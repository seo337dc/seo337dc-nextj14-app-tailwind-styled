"use client"; // 클라이언트 컴포넌트로 설정

import { Colors, Fonts } from "@/common/constant";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,body {
    min-height: 100%;
    scroll-behavior: smooth !important;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	vertical-align: baseline;
    /* font: inherit; */
    
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }

  body {
    font-family: ${Fonts.Pretendard};
    color: ${Colors.Black};
    /* background-color: ${Colors.Black}; */
  }
  button {
      outline: none;
      border: 0;
      cursor: pointer;
    }  
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

  }
  a {
    color: inherit;
    text-decoration: none;
  }

  #__next{
    min-height: 100vh;
    height: 100%;
  }
`;

export default function GlobalStyleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
