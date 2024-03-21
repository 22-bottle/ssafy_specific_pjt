import React, { startTransition } from "react";
import { useNavigate } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Currency.module.css';
import { useRecoilState } from "recoil";
import { currencydetailState } from "@/state/currencyatoms";


const usaflag = require('@/assets/usaflag.PNG');
const japanflag = require('@/assets/japanflag.PNG');
const europeflag = require('@/assets/europeflag.PNG');
const chinaflag = require('@/assets/chinaflag.PNG');
const upicon = require('@/assets/upicon.png');
// const downicon = require('@/assets/downicon.png');




const Currency: React.FC = () => {
    const [countryId, setCountryId] = useRecoilState(currencydetailState)
    const navigate = useNavigate()
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
                {'rate 환율 자리'}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {'얼마나 증가했는지'}
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
                {'rate 환율 자리'}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {'얼마나 증가했는지'}
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
                {'rate 환율 자리'}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {'얼마나 증가했는지'}
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
                {'rate 환율 자리'}
                
            </Typography>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={upicon} alt="Change icon" />
                {'얼마나 증가했는지'}
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