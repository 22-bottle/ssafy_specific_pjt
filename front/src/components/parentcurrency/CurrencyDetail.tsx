import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const CurrencyDetail: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: "line",
        },
        series: [{
            data: [{
              x:'2018-02-12',
              y: 76
            }, {
              x: '2018-02-13',
              y: 77
            }]
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
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행되도록 함

  return (
    <div>
      <div>this is currency detail page</div>
      <div ref={chartRef} /> {/* 차트를 렌더링할 div에 ref를 연결 */}
    </div>
  );
};

export default CurrencyDetail;