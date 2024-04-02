import React, { useEffect, useState } from 'react'
import { history } from "@/api/child"
import styles from "./HistoryDetail.module.css";

interface HistoryDetailProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    countryId: number
}

interface historyDetail {
    historyId: number
    stageId: number
    price: number
    date: string
}

const HistoryDetail: React.FC<HistoryDetailProps> = ({ open, setOpen, countryId }) => {
    const [historyData, setHistoryData] = useState(new Array<historyDetail>());
    
    useEffect(() => {
        history(countryId)
            .then(response => {
                const temp = new Array<historyDetail>();
                for (const his of response.data.data.historyList) {
                    temp.push({ historyId: his.historyId, stageId: his.stageId, price: his.price, date: his.date });
                }
                setHistoryData(temp);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className={styles.container}>
            <div>{historyData.length}건</div>
            <div>{historyData.map((his, index) => (
                <div>
                    <hr/>
                    <div>{index + 1}.</div>
                    <div className={styles.stageDiv}>{his.stageId}</div>
                    <div className={styles.priceDiv}>
                        <span>금액: {his.price}</span>
                        <span>날짜: {his.date}</span>
                    </div>
                </div>
              ))}</div>
        </div>
    )
}

export default HistoryDetail