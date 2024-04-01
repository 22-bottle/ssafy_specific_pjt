import React, { useEffect, useState } from 'react'
import { history } from "@/api/child"

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
        <div>
            <div>{historyData.length}건</div>
            <div>{historyData.map((his, index) => (
                <div key={index}>
                    스테이지: {his.stageId}
                    금액: {his.price}
                    날짜: {his.date}
                </div>
              ))}</div>
        </div>
    )
}

export default HistoryDetail