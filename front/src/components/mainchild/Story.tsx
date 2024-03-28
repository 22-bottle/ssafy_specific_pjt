import React, { useState } from 'react'
import styles from './Story.module.css'
const storyBackgroundLab = require('@/assets/storylab.png')
const storyspaceship = require('@/assets/storyspaceship.png')
const storyworldmap = require('@/assets/worldmap.jpg')

type Storyline = {
  id: number
  text: string
  image: string // 이미지 URL
  isgrandpa: number
  isgrandchild: number
}
const stories: Storyline[] = [
  {
    id: 0,
    text: '할아버지 저 왔어요 !',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 0,
  },
  {
    id: 1,
    text: '아이구 내 똥강아지 왔구나 보고 싶었단다',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 2,
    text: '할아버지 저도 보고 싶었어요! 할아버지 저건 뭐예요?',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 3,
    text: '아 저거? 저건 내가 요즘 개발중인 타임머신이란다. 아직 완성된게 아니니 절대 함부로 만지면 안된단다',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 4,
    text: '잠시 화장실에 다녀올테니 여기 앉아서 기다리거라',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 5,
    text: '우와 멋지다... 그냥 잠깐 구경하는건 괜찮겠지? 오 여기로 들어가는 건가?',
    image: storyBackgroundLab,
    isgrandpa: 0,
    isgrandchild: 1,
  },
  {
    id: 6,
    text: '우우우웅 우우웅',
    image: storyBackgroundLab,
    isgrandpa: 0,
    isgrandchild: 1,
  },
  {
    id: 7,
    text: '할아버지!! 빨리 와보세요!! 이상한 소리가 나요!!',
    image: storyBackgroundLab,
    isgrandpa: 0,
    isgrandchild: 1,
  },
  {
    id: 8,
    text: '안돼 !! 아가 !!',
    image: storyBackgroundLab,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 9,
    text: '아이구 이녀석아.. 만지면 안된다니까...',
    image: storyspaceship,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 10,
    text: '죄송해요 할아버지 잠깐 구경하는건 괜찮을 줄 알았어요',
    image: storyspaceship,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 11,
    text: '아휴 넌 어릴때부터 나를 닮아 아주 호기심이 많았지 이렇게 될 수 있다고 생각했단다',
    image: storyspaceship,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 12,
    text: '할아버지 우리는 이제 어디로 가는거에요?',
    image: storyspaceship,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 13,
    text: '과거의 지구로 가고 있는 것 같구나. 자! 저길 봐라 아가',
    image: storyspaceship,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 14,
    text: '우와 ! 너무 예뻐요 !',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 15,
    text: '지금 예쁜게 중요한게 아니란다 아가... 우리는 여기서 연료를 얻어서 집으로 돌아가야 해',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 16,
    text: '연료요? 연료를 어디서 얻을 수 있어요?',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 17,
    text: '시간을 지키는 요정들에게 부탁하면 된단다',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 18,
    text: '시간을 지키는 요정들이요?',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 19,
    text: '우리처럼 타임머신을 타고 와서 역사를 바꾸려고 하는 사람들 때문에 요정들이 시간을 지키게 되었단다.',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
  {
    id: 20,
    text: '요정들이 내는 문제를 맞추고 연료를 받아서 집으로 돌아가자꾸나! ',
    image: storyworldmap,
    isgrandpa: 1,
    isgrandchild: 1,
  },
]
const Story: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const goToPreviousStory = () => {
    setCurrentStoryIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNextStory = () => {
    setCurrentStoryIndex((prev) =>
      prev < stories.length - 1 ? prev + 1 : prev
    )
  }
  return (
    <div className={styles.storyContainer}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${stories[currentStoryIndex].image})` }}
      />
      <div>
        {stories[currentStoryIndex].isgrandpa === 1 && (
          <div className={styles.grandpa} />
        )}
      </div>
      <div>
        {stories[currentStoryIndex].isgrandchild === 1 && (
          <div className={styles.boy} />
        )}
      </div>
      <div>
        {currentStoryIndex <= 8 && <div className={styles.timemachine} />}
      </div>
      <div className={styles.storyNavigation}>
        <button
          className={styles.button}
          onClick={goToPreviousStory}
          disabled={currentStoryIndex === 0}
        >
          Previous
        </button>
        <div className={styles.textfield}>
          <p>{stories[currentStoryIndex].text}</p>
        </div>
        <button
          className={styles.button}
          onClick={goToNextStory}
          disabled={currentStoryIndex === stories.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Story
