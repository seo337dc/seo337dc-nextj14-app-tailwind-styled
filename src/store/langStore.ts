import { atom } from "jotai";
export enum Lang {
  KOR = "kor",
  ENG = "eng",
}

export const langAtom = atom<Lang>(Lang.ENG);
