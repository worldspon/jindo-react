import React from 'react';
import styles from './indexAdprofit.css'

export default class Adprofit extends React.Component {
    constructor(props) {
        super(props);
        this.state = props
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/todos/1")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //         console.log(result);
        //         this.setState({
        //             isLoaded: true,
        //             items: result.items
        //         });
        //         console.log(this.state);
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //       this.setState({
        //         isLoaded: true,
        //         error
        //       });
        //     }
        // )
    }

    render() {
        return (
            <div className={styles.adprofit__header}>
                <div className={styles.adprofit__category}>
                    <span className={styles.adprofit__category__title}>
                        {this.state.prevMonth.month}월 총 광고수익금
                    </span>
                    <span className={styles.adprofit__category__number}>
                        ${this.state.prevMonth.total}
                    </span>
                </div>
                <div className={styles.adprofit__category}>
                    <span className={styles.adprofit__category__title}>
                        {this.state.currentMonth.month}월 총 광고수익금
                    </span>
                    <span className={styles.adprofit__category__number}>
                        ${this.state.currentMonth.total}
                    </span>
                </div>
                <div className={styles.adprofit__category}>
                    <span className={styles.adprofit__category__title}>
                        전월대비 증감률
                    </span>
                    <span className={styles.adprofit__category__number}>
                        ${this.state.currentMonth.total}
                    </span>
                </div>
            </div>
        )
    }
}