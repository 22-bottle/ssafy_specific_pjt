import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useRecoilValue } from 'recoil';
import { currencydataList } from '@/state/currencyselectors';

const CurrencyDetail: React.FC = () => {
    const currencyData = useRecoilValue(currencydataList) || []
    const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: "line",
        },
        series:[{
            data:currencyData
        }],
        xaxis: {
            type: 'datetime'
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
    <div>
      <div>this is currency detail page</div>
      <div ref={chartRef} />
    </div>
  );
};

export default CurrencyDetail;