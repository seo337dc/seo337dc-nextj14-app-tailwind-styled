import { ScreenBoundary } from "./constant";

export const getMediaQueryCSS = (
  cssProperties: string,
  boundary: string = ScreenBoundary.Phone2PC
) => `
    @media screen and (max-width: ${boundary}) {
        ${cssProperties}
    }
`;
