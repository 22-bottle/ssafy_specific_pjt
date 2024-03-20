import { atom } from "recoil";

export const currencydetailState = atom({
    // 어떤 나라 환율 디테일을 클릭했는지 상태 변수
    // 1:USD 2:JPY 3:EUR 4:CNH
    key: "currencydetailState",
    default: 0,
  });
  