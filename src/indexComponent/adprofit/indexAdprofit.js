import React from 'react';
import styles from './indexAdprofit.css'
import 'chart.js';


function getPromise(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.withCredentials = true;
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

export default class Adprofit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevMonth: props.prevMonth,
            currentMonth: props.currentMonth
        }
    }


    componentDidMount() {
        // const p = getPromise('/api/main/totalIncomes');

        // p.then((result) => {
        //     console.log(result);
        // }, () => {
        //     console.log('error');
        // })

        fetch("/api/main/totalIncomes", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

        // fetch("/api/login", {
        //     method: 'POST',
        //     body: JSON.stringify(user),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // })
        // .then((res) => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));

        
        // fetch("/api/logout", {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // })
        // .then((res) => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.category}>
                    <span className={styles.title}>
                        {this.state.prevMonth.month}월 총 광고수익금
                    </span>
                    <span className={styles.number}>
                        ${this.state.prevMonth.total}
                    </span>
                </div>
                <div className={styles.category}>
                    <span className={styles.title}>
                        {this.state.currentMonth.month}월 총 광고수익금
                    </span>
                    <span className={styles.number}>
                        ${this.state.currentMonth.total}
                    </span>
                </div>
                <div className={styles.category}>
                    <span className={styles.title}>
                        전월대비 증감률
                    </span>
                    <span className={styles.number}>
                        ${this.state.currentMonth.total}
                    </span>
                </div>
            </div>
        )
    }
}