import React from 'react';
import styles from './indexAdprofit.css'

export default class Adprofit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 현재월, 이전월 저장
    setMonth() {
        const currentMonth = new Date().getMonth()+1;
        const prevMonth = currentMonth === 1 ? 12 : currentMonth-1;
        this.setState({
            prevMonth: prevMonth,
            currentMonth: currentMonth
        });
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

    // 수익 데이터 비동기 통신 종료 후 화폐 형식으로 저장
    async getIncomeData(url) {
        try {
            const incomeData = await this.getFetch(url);
            this.setState({
                prevIncome: this.currencyFormat(incomeData.estimatedIncomes),
                currentIncome: this.currencyFormat(incomeData.incomes),
                percentageChange: this.currencyFormat(incomeData.percentageChange)
            })
        } catch(error) {
            // 로그인 실패시
            console.log(error);
        }
    }

    // 화폐 형식으로 변환해주는 함수
    currencyFormat(income) {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(parseFloat(income));
    }


    componentDidMount() {
        this.setMonth();
        this.getIncomeData("/api/main/totalIncomes");
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.category}>
                    <span className={styles.title}>
                        {this.state.prevMonth}월 총 광고수익금
                    </span>
                    <span className={styles.number}>
                        {this.state.prevIncome}
                    </span>
                </div>
                <div className={styles.category}>
                    <span className={styles.title}>
                        {this.state.currentMonth}월 총 광고수익금
                    </span>
                    <span className={styles.number}>
                        {this.state.currentIncome}
                    </span>
                </div>
                <div className={styles.category}>
                    <span className={styles.title}>
                        전월대비 증감률
                    </span>
                    <span className={styles.number}>
                        {this.state.percentageChange}
                    </span>
                </div>
            </div>
        )
    }
}