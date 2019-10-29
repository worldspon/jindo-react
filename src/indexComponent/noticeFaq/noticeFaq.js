import React from 'react';
import common from '../../common/common.css';
import styles from './noticeFaq.css';

export default class NoticeFaq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    // 공지사항 데이터 비동기 통신 종료 후 컴포넌트 형식으로 저장
    async getNoticeData(url) {
        try {
            const noticeData = await this.getFetch(url);
            const noticeArray = noticeData.notices.map((row, index) => 
                <div className={styles.row} key={index} data-id={row.id}>
                    <a href={`/notice/0/${row.id}`}>
                        <span>{row.title}</span>
                    </a>
                    <span>{row.created}</span>
                </div>
            )
            this.setState({notice: noticeArray});
        } catch(error) {
            console.log(error);
        }
    }

    // FAQ 데이터 비동기 통신 종료 후 컴포넌트 형식으로 저장
    async getFaqData(url) {
        try {
            const faqData = await this.getFetch(url);
            const faqArray = faqData.faqs.map((row, index) => 
                <div className={styles.row} key={index} data-id={row.id}>
                    <a href={`/faq/0/${row.id}`}>
                        <span>{row.question}</span>
                    </a>
                </div>
            )
        this.setState({faq: faqArray});
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getNoticeData('/api/main/notice');
        this.getFaqData('/api/main/faq');
    }

    render() {
        return (
            <div className={styles.noticeFaqBox}>
                <div className={styles.noticeBox}>
                    <div className={styles.titleBox}>
                        <div className={styles.titleBoxInner}>
                            <h1>공지사항</h1>
                            <button className={common.moreBtn}>MORE</button>
                        </div>
                    </div>
                    { this.state.notice }
                </div>
                <div className={styles.faqBox}>
                    <div className={styles.titleBox}>
                        <div className={styles.titleBoxInner}>
                            <h1>FAQ</h1>
                            <button className={common.moreBtn}>MORE</button>
                        </div>
                    </div>
                    { this.state.faq }
                </div>
            </div>
        )
    }
}