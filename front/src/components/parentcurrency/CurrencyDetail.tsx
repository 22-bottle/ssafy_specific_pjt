import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useRecoilValue } from 'recoil';
import { currencydataList } from '@/state/currencyselectors';
import styles from './CurrencyDetail.module.css';
import { Height } from "@mui/icons-material";


const CurrencyDetail: React.FC = () => {
    const currencyData = useRecoilValue(currencydataList) || []
    const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: "line",
          locales:[{
            "name": "ko",
            "options": {
              "months": [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월"
              ],
              "shortMonths": [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월"
              ],
              "days": [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일"
              ],
              "shortDays": ["일", "월", "화", "수", "목", "금", "토"],
              "toolbar": {
                "exportToSVG": "SVG 다운로드",
                "exportToPNG": "PNG 다운로드",
                "exportToCSV": "CSV 다운로드",
                "selection": "선택",
                "selectionZoom": "선택영역 확대",
                "zoomIn": "확대",
                "zoomOut": "축소",
                "pan": "패닝",
                "reset": "원래대로"
              }
            }
          }],
          defaultLocale: 'ko'

        },
        series:[{
            data:currencyData
        }],
        xaxis: {
            type: 'datetime',
            labels:{
              // x 축 글자 크기 조정
              style:{fontSize:'20px'}
              
            }
          }  
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        // 차트 인스턴스 제거를 위한 clean-up 함수
        chart.destroy();
      };
    }
  }, [currencyData]); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  return (
    <div className={styles.container}>
      <div className={styles.header}>this is currency detail page</div>
      <div className={styles.chart} >
      <div  ref={chartRef} />
      </div>
      
    </div>
  );
};

export default CurrencyDetail;