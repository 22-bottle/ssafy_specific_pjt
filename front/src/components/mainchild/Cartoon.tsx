import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Cartoon.module.css'


const Cartoon:React.FC= () => {
    // 스테이지 별 해당 만화
    // const [cartoon, setCartoon] =  useState('만화 자리')


    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.cartoonContainer}>
                <img src="###" alt="만화" />          
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton}></button>
                <button className={styles.frontButton}></button>
            </div>
        </div>
        
        
    );
};

export default Cartoon;