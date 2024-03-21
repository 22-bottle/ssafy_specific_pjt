import React from 'react'
import LoadingImage from '@/assets/loading.gif'
import styles from './loading.module.css'

const Loading: React.FC = () => {
  return (
    <div>
      <div>
        <p>Loading</p>
      </div>
      <div className={styles.loadingcontainer}>
        <img src={LoadingImage} alt="Loading..." className={styles.img} />
      </div>
    </div>
  )
}

export default Loading
