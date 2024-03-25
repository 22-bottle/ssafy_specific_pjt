import React, { startTransition, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Currency.module.css';
import { useRecoilState } from "recoil";
import { currencydetailState } from "@/state/currencyatoms";
import { today } from "@/api/currency";

const usaflag = require('@/assets/usaflag.PNG');
const japanflag = require('@/assets/japanflag.PNG');
const europeflag = require('@/assets/europeflag.PNG');
const chinaflag = require('@/assets/chinaflag.PNG');
const upicon = require('@/assets/upicon.png');
// const downicon = require('@/assets/downicon.png');




const Currency: React.FC = () => {
    const [countryId, setCountryId] = useRecoilState(currencydetailState)
    const [usaBasicRate, setUsaBasicRate] = useState('')
    const [euBasicRate, setEuBasicRate] = useState('')
    const [japanBasicRate, setJapanBasicRate] = useState('')
    const [chinaBasicRate, setChinaBasicRate] = useState('')
    const [usaAmount, setUsaAmount] = useState('')
    const [euAmount, setEuAmount] = useState('')
    const [japanAmount, setJapanAmount] = useState('')
    const [chinaAmount, setChinaAmount] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const fetchTodayCurrency = async() => {
            try {
                const response = await today();
                setUsaBasicRate(response.data.data[0].basicRate);
                setJapanBasicRate(response.data.data[1].basicRate);
                setEuBasicRate(response.data.data[2].basicRate);
                setChinaBasicRate(response.data.data[3].basicRate);
                setUsaAmount(response.data.data[0].amount);
                setJapanAmount(response.data.data[1].amount);
                setEuAmount(response.data.data[2].amount);
                setChinaAmount(response.data.data[3].amount);
            } catch (error) {
                console.error('API 요청 중 오류 발생: ', error);
            }
        }
        fetchTodayCurrency();
    }, [])
    const navigatToDetail = (Id:number) => {
        // 상태 업데이트 함수를 사용하여 countryId 상태를 변경
        setCountryId(Id);
        // startTransition을 사용하여 비동기 업데이트 처리
        startTransition(() => {
            navigate('/currency/detail');
        });
    }
return (
    <div className="currencycontainer">
        <div className="header">
        <Typography variant="h3" component="div">
            실시간 환율
        </Typography>
        </div>
        <div className="body">
            {/* 미국환율 */}
            <Card className={styles.card} >
            <Box style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
            <img src={usaflag} alt={`usa flag`} style={{width:'100px', height:'60px'}} />
            <Typography className={styles.currencyInfo}>
                {'미국 달러'}
                {usaBasicRate}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {usaAmount}
                </Box>
                <CardActions>
                <Button size="small" className={styles.detailButton} onClick={() => navigatToDetail(1)}>자세히보기</Button>
                </CardActions>
            </Box>
            </Card>
            {/* 유럽 유로 */}
            <Card className={styles.card}>
            <Box style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
            <img src={europeflag} alt={`europe flag`} style={{width:'100px', height:'60px'}} />
            <Typography className={styles.currencyInfo}>
                {'유럽 유로'}
                {euBasicRate}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {euAmount}
                </Box>
                <CardActions>
                <Button size="small" className={styles.detailButton} onClick={() => navigatToDetail(3)}>자세히보기</Button>
                </CardActions>
            </Box>
            </Card>
            {/* 일본 엔 */}
            <Card className={styles.card}>
            <Box style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
            <img src={japanflag} alt={`japan flag`} style={{width:'100px', height:'60px'}} />
            <Typography className={styles.currencyInfo}>
                {'일본 엔'}
                {japanBasicRate}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {japanAmount}
                </Box>
                <CardActions>
                <Button size="small" className={styles.detailButton} onClick={() => navigatToDetail(2)}>자세히보기</Button>
                </CardActions>
            </Box>
            </Card>
            {/* 중국 위안 */}
            <Card className={styles.card}>
            <Box style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
            <img src={chinaflag} alt={`china flag`} style={{width:'100px', height:'60px'}} />
            <Typography className={styles.currencyInfo}>
                {'중국 위안'}
                {chinaBasicRate}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {chinaAmount}
                </Box>
                <CardActions>
                <Button size="small" className={styles.detailButton} onClick={() => navigatToDetail(4)}>자세히보기</Button>
                </CardActions>
            </Box>
            </Card>
        </div>
    </div>
    
    
);
};

export default Currency;