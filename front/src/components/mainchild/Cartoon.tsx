import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Cartoon.module.css'
import { bookList } from "@/state/childselectors";
import { useRecoilValue } from "recoil";
import { StoreMallDirectorySharp } from "@mui/icons-material";

const Cartoon:React.FC= () => {
    // 스테이지 별 해당 만화
    // const [cartoon, setCartoon] =  useState('')
    const cartoonList = useRecoilValue(bookList) || [];

    const [currentCartoonIndex, setCurrentCartoonIndex] = useState(0);
    const goToPreviousCartoon = () => {
        setCurrentCartoonIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };
    const goToNextCartoon = () => {
        setCurrentCartoonIndex((prev) => (prev < 4 ? prev + 1 : prev));
    }

    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.cartoonContainer}>
                <img src={cartoonList[currentCartoonIndex].pageImg} alt="만화" />          
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton} onClick={goToPreviousCartoon}></button>
                <button className={styles.frontButton} onClick={goToNextCartoon}></button>
            </div>
        </div>
        
    );
};

export default Cartoon;