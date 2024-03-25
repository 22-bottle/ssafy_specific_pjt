import { selector } from 'recoil'
import { stageSubjectState } from './StageSubjectAtoms'

// 각 나라별 스테이지 시작 주제 데이터 더미

const USAsubject = [
  '미국의 첫번째 주제',
  '미국의 두번째 주제',
  '미국의 세번째 주제',
  '미국의 네번째 주제',
  '미국의 다섯번째 주제',
]

const Italysubject = [
  '이탈리아의 첫번째 주제',
  '이탈리아의 두번째 주제',
  '이탈리아의 세번째 주제',
  '이탈리아의 네번째 주제',
  '이탈리아의 다섯번째 주제',
]

const Japansubject = [
  '일본의 첫번째 주제',
  '일본의 두번째 주제',
  '일본의 세번째 주제',
  '일본의 네번째 주제',
  '일본의 다섯번째 주제',
]

const Chinasubject = [
  '중국의 첫번째 주제',
  '중국의 두번째 주제',
  '중국의 세번째 주제',
  '중국의 네번째 주제',
  '중국의 다섯번째 주제',
]

// 미국
export const selectedUSAStageInfo = selector({
  key: 'selectedUSAStageInfo',
  get: async ({ get }) => {
    const stageId = get(stageSubjectState)
    let response

    if (stageId === 1) {
      response = USAsubject
    }

    // 현재 선택된 스테이지의 인덱스
    const selectedUSAStageIndex = get(stageSubjectState)

    // 선택된 스테이지의 주제
    const selectedTopic = USAsubject[selectedUSAStageIndex]

    // 선택된 스테이지 번호와 주제 반환
    return {
      stageNum: selectedUSAStageIndex + 1,
      topic: selectedTopic,
    }
  },
})

// 이탈리아
export const selectedItalyStageInfo = selector({
  key: 'selectedItalyStageInfo',
  get: async ({ get }) => {
    const stageId = get(stageSubjectState)
    let response

    if (stageId === 1) {
      response = Italysubject
    }

    // 현재 선택된 스테이지의 인덱스
    const selectedItalyStageIndex = get(stageSubjectState)

    // 선택된 스테이지의 주제
    const selectedTopic = Italysubject[selectedItalyStageIndex]

    // 선택된 스테이지 번호와 주제 반환
    return {
      stageNum: selectedItalyStageIndex + 1,
      topic: selectedTopic,
    }
  },
})
