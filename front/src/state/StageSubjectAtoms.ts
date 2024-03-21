import { atom } from "recoil";

export const stageSubjectState = atom({
  // 해당 나라의 어떤 스테이지를 클릭했는지 상태 변수
  // 각 나라별 5개의 스테이지
  key: "stageSubjectState",
  default: 0,
});
