import React, { startTransition, useEffect, useState } from "react";
import styles from './worldmap.module.css'
import { useNavigate } from 'react-router-dom';
import { progress } from "@/api/child";
import { countrydetailState } from "@/state/StageSubjectAtoms"
import { useRecoilState } from "recoil";

const Worldmap:React.FC= () => {
    const [countryId, setCountryId] = useRecoilState(countrydetailState)
    const [isTutorial, setIsTutorial] = useState('')
    const [fuel, setFuel] = useState('')
    const [usaProgressRate, setUsaProgressRate] = useState('')
    const [euProgressRate, setEuProgressRate] = useState('')
    const [japanProgressRate, setJapanProgressRate] = useState('')
    const [chinaProgressRate, setChinaProgressRate] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProgressRate = async() => {
            try {
                const response = await progress();
                console.log(response.data.data);
                setIsTutorial(response.data.data.isTutorial);
                setFuel(response.data.data.fuel);
                setUsaProgressRate(response.data.data.progressRateList[0].progressRate);
                setJapanProgressRate(response.data.data.progressRateList[1].progressRate);
                setEuProgressRate(response.data.data.progressRateList[2].progressRate);
                setChinaProgressRate(response.data.data.progressRateList[3].progressRate);
            } catch (error) {
                console.error('API 요청 중 오류 발생: ', error)
            }
        }
        fetchProgressRate();
    }, [])
    const navigatToUSA = () => {
        setCountryId(1)
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/usa');
        });
    }
    const navigatToItaly = () => {
        setCountryId(3)
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/italy');
        });
    }
    const navigatToJapn= () => {
        setCountryId(2)
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/japan');
        });
    }
    const navigatToChina= () => {
        setCountryId(4)
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/mainchild/china');
        });
    }
    return (
        <div className={styles.backgroundIMG}>
            <div className={styles.usapin} onClick={ navigatToUSA }>{usaProgressRate}</div>
            <div className={styles.italypin} onClick={navigatToItaly}>{euProgressRate}</div>
            <div className={styles.japanpin} onClick={navigatToJapn}>{japanProgressRate}</div>
            <div className={styles.chinapin} onClick={navigatToChina}>{chinaProgressRate}</div>
            <div className={styles.fuel}>{fuel}</div>
            <div className={styles.timemachine}></div>
       </div>
    );
};

export default Worldmap;