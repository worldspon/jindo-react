import React from 'react';
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

    // CHART 생성 및 CHART OBJECT STATE 저장
    createChart() {
        const chartTag = document.getElementById("chart").getContext("2d");
        const chartObject = new Chart(chartTag, {
            type: 'line',
            data: {
                labels: ['', '15일', '16일', '17일', '18일', '19일', '20일', '21일', ''],
                datasets: [{
                    label: false,
                    data: [null, 154.2, 200.5, 302, 283, 112, 343, 98, null],
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

    // WINDOW RESIZE EVENT BIND 및 CANVAS HEIGHT STATE 변경 및 UPDATE
    updateChartHeight() {
        window.addEventListener('resize', () => {
            this.setChartHeight();
            this.state.chartObject.update();
        })
    }

    // WINDOW HEIGHT에 따라 CANVAS HEIGHT STATE 값을 변경
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
        // CHART CREATE
        this.createChart();
        // WINDOW RESIZE시 CHART HEIGHT 변경
        this.updateChartHeight();
    }

    render() {
        return (
            <div className={styles.chartBox}>
                <div className={styles.titleBox}>
                    <h1 className={styles.titleBox__title}>최근 7일 광고수익금</h1>
                    <button className={styles.titleBox__button}>MORE</button>
                </div>
                <div>
                    {/* canvas 반응형을 제어하려면 DIV으로 한 번 더 감싸야한다. */}
                    <canvas id="chart" style={{height: this.state.chartHeight + 'px'}}></canvas>
                </div>
            </div>
        )
    }
}