import React, { useEffect, useRef, useState } from 'react'
import ApexCharts from 'apexcharts'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currencydataList } from '@/state/currencyselectors'
import styles from './CurrencyDetail.module.css'
import { Height } from '@mui/icons-material'
import { currencydetailState } from '@/state/currencyatoms'
import { today } from '@/api/currency'
import updown from '../../assets/updow.png'
const CurrencyDetail: React.FC = () => {
  const currencyData = useRecoilValue(currencydataList) || []
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: 'line',
          locales: [
            {
              name: 'ko',
              options: {
                months: [
                  '1월',
                  '2월',
                  '3월',
                  '4월',
                  '5월',
                  '6월',
                  '7월',
                  '8월',
                  '9월',
                  '10월',
                  '11월',
                  '12월',
                ],
                shortMonths: [
                  '1월',
                  '2월',
                  '3월',
                  '4월',
                  '5월',
                  '6월',
                  '7월',
                  '8월',
                  '9월',
                  '10월',
                  '11월',
                  '12월',
                ],
                days: [
                  '일요일',
                  '월요일',
                  '화요일',
                  '수요일',
                  '목요일',
                  '금요일',
                  '토요일',
                ],
                shortDays: ['일', '월', '화', '수', '목', '금', '토'],
                toolbar: {
                  exportToSVG: 'SVG 다운로드',
                  exportToPNG: 'PNG 다운로드',
                  exportToCSV: 'CSV 다운로드',
                  selection: '선택',
                  selectionZoom: '선택영역 확대',
                  zoomIn: '확대',
                  zoomOut: '축소',
                  pan: '패닝',
                  reset: '원래대로',
                },
              },
            },
          ],
          defaultLocale: 'ko',
        },
        series: [
          {
            data: currencyData,
          },
        ],
        xaxis: {
          type: 'datetime',
          labels: {
            style: { fontSize: '20px' },
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM',
              day: 'MM/ dd', // 원하는 형식으로 변경
              hour: 'HH:mm',
            },
          },
        },
      }

      const chart = new ApexCharts(chartRef.current, options)
      chart.render()

      return () => {
        // 차트 인스턴스 제거를 위한 clean-up 함수
        chart.destroy()
      }
    }
  }, [currencyData]) // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  const [contryId, setCountryId] = useRecoilState(currencydetailState)
  const countries = ['', '미국 USD', '일본 JPY', '유럽 EUR', '중국 CNY']
  const [usaBasicRate, setUsaBasicRate] = useState('')
  const [euBasicRate, setEuBasicRate] = useState('')
  const [japanBasicRate, setJapanBasicRate] = useState('')
  const [chinaBasicRate, setChinaBasicRate] = useState('')
  const [usaAmount, setUsaAmount] = useState('')
  const [euAmount, setEuAmount] = useState('')
  const [japanAmount, setJapanAmount] = useState('')
  const [chinaAmount, setChinaAmount] = useState('')
  useEffect(() => {
    const fetchTodayCurrency = async () => {
      try {
        const response = await today()
        setUsaBasicRate(response.data.data[0].basicRate)
        setJapanBasicRate(response.data.data[1].basicRate)
        setEuBasicRate(response.data.data[2].basicRate)
        setChinaBasicRate(response.data.data[3].basicRate)
        setUsaAmount(response.data.data[0].amount)
        setJapanAmount(response.data.data[1].amount)
        setEuAmount(response.data.data[2].amount)
        setChinaAmount(response.data.data[3].amount)
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchTodayCurrency()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.header}>{countries[contryId]}</div>
      <div>
        실시간 환율 {usaBasicRate}원 어제보다 {usaAmount}원{' '}
        <img
          src={updown}
          alt="boy"
          style={{ height: '22px', marginTop: 3, marginLeft: '15px' }}
        />
      </div>
      <div className={styles.chart}>
        <div ref={chartRef} />
      </div>
    </div>
  )
}

export default CurrencyDetail
