import React from "react";
import styles from './USA.module.css'

const USA:React.FC= () => {
    
    return (
        <div>
            <div className={styles.backgroundIMG}></div>
            <div className={styles.usamap}></div>
            <div className={styles.stage1}></div>
            {/* stage가 개방되었는지 확인하고 css 다르게 적용 기능 추가해야함 */}
            <div className={styles.unactive_stage2}></div>
            <div className={styles.unactive_stage3}></div>
            <div className={styles.unactive_stage4}></div>
            <div className={styles.unactive_stage5}></div>

            <div className={styles.fairy}></div>
        </div>
        
    );
};

export default USA;