import React from 'react';
import styles from './noticeFaq.css';

const noticeArray = [
    {
        title: '공지사항1',
        date: '2019-10-10'
    },
    {
        title: '공지사항2',
        date: '2019-10-10'
    },
    {
        title: '공지사항3',
        date: '2019-10-10'
    },
    {
        title: '공지사항4',
        date: '2019-10-10'
    },
    {
        title: '공지사항5',
        date: '2019-10-10'
    }
]

export default class NoticeFaq extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.noticeFaqBox}>
                <div className={styles.noticeBox}>
                    <h1 className={styles.noticeFaqBox__title}>공지사항</h1>
                    {
                        noticeArray.map((row, index) => 
                        <div className={styles.row} key={index}>
                            <span>{row.title}</span>
                            <span>{row.date}</span>
                        </div>
                        )
                    }
                </div>
                <div className={styles.faqBox}>
                    <h1 className={styles.noticeFaqBox__title}>FAQ</h1>
                    <div className={styles.row}>
                        <span>TITLE</span>
                        <span>DATE</span>
                    </div>
                    <div className={styles.row}>
                        <span>TITLE</span>
                        <span>DATE</span>
                    </div>
                    <div className={styles.row}>
                        <span>TITLE</span>
                        <span>DATE</span>
                    </div>
                    <div className={styles.row}>
                        <span>TITLE</span>
                        <span>DATE</span>
                    </div>
                    <div className={styles.row}>
                        <span>TITLE</span>
                        <span>DATE</span>
                    </div>
                </div>
            </div>
        )
    }
}