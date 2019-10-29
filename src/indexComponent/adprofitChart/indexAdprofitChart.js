import React from 'react';
import common from '../../common/common.css';
import styles from './indexAdprofitChart.css'
import 'chart.js';

export default class AdprofitChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartHeight: window.innerWidth > 960 ? 500 : window.innerWidth > 500 ? 300 : 200,
            chartObject: null
        };
    }

    getFetch(url) {
        return fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(response => response.json())
    }

    // 차트 데이터 비동기 통신 종료 후 차트 생성 및 이벤트 바인딩
    async getChartData(url) {
        try {
            const incomeObject = await this.getFetch(url);
            const keyArray = [], valueArray = [];
            keyArray.push('');
            valueArray.push(null);

            for(let [key, value] of Object.entries(incomeObject.incomes)) {
                keyArray.push(key);
                valueArray.push(value);
            }
            keyArray.push('');
            valueArray.push(null);

            this.createChart(keyArray, valueArray);
            this.chartResizeEvent();
        } catch(error) {
            // 로그인 실패시
            console.log(error);
        }
    }

    // 차트 생성 및 차트 object를 state에 저장
    createChart(keyArray, valueArray) {
        const chartTag = document.getElementById("chart").getContext("2d");
        const chartObject = new Chart(chartTag, {
            type: 'line',
            data: {
                labels: keyArray,
                datasets: [{
                    label: false,
                    data: valueArray,
                    fill: false,
                    borderColor: '#6f569c',
                    borderWidth: 5,
                    pointBorderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointRadius: 5,
                    tension: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        offsetGridLines:false,
                        ticks: {
                        }
                    }]
                }
            }
        });

        this.setState({
            chartObject: chartObject
        });
    }

    // 창 크기 변경 이벤트 등록 함수
    chartResizeEvent() {
        window.addEventListener('resize', () => {
            this.setChartHeight();
            this.state.chartObject.update();
        })
    }

    // 창 넓이에 따라 차트 높이를 변경하는 이벤트 함수
    setChartHeight() {
        if(window.innerWidth <= 500){
            this.setState({chartHeight: 200});
        }else if(window.innerWidth <= 960){
            this.setState({chartHeight: 300});
        }else {
            this.setState({chartHeight: 500});
        }
    }

    componentDidMount() {
        this.getChartData('/api/main/chart');
    }

    render() {
        return (
            <div className={styles.chartBox}>
                <div className={styles.titleBox}>
                    <h1 className={styles.title}>최근 7일 광고수익금</h1>
                    <button className={common.moreBtn}>MORE</button>
                </div>
                <div>
                    {/* canvas 반응형을 제어하려면 DIV으로 한 번 더 감싸야한다. */}
                    <canvas id="chart" style={{height: this.state.chartHeight + 'px'}}></canvas>
                </div>
            </div>
        )
    }
}