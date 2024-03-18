import React, { startTransition } from "react";
import styles from './worldmap.module.css'
import { useNavigate } from 'react-router-dom'; 

const Worldmap:React.FC= () => {
    const navigate = useNavigate()
    const navigatToUSA = () => {
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/usa');
        });
    }
    const navigatToItaly = () => {
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/italy');
        });
    }
    const navigatToJapn= () => {
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/japan');
        });
    }
    const navigatToChina= () => {
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/china');
        });
    }
    return (
        <div className={styles.backgroundIMG}>
            <div className={styles.usapin} onClick={ navigatToUSA }></div>
            <div className={styles.italypin} onClick={navigatToItaly}></div>
            <div className={styles.japanpin} onClick={navigatToJapn}></div>
            <div className={styles.chinapin} onClick={navigatToChina}></div>
            <div className={styles.fuel}></div>
            <div className={styles.timemachine}></div>
       </div>
       
    );
};

export default Worldmap;