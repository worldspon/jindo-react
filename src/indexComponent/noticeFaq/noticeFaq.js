import React from 'react';
import common from '../../common/common.css';
import styles from './noticeFaq.css';

const noticeArray = [
    {
        title: '좀비낙하 서비스 재개 안내',
        date: '2019-10-10'
    },
    {
        title: '기록 보존 기간에 대한 안내',
        date: '2019-10-10'
    },
    {
        title: '코코게임즈 정기점검 안내',
        date: '2019-10-10'
    },
    {
        title: '포인트 환급 연기 안내',
        date: '2019-10-10'
    },
    {
        title: '태무신왕 충운탑 초기화 안내',
        date: '2019-10-10'
    }
];

const faqArray = [
    {
        title: '랭킹은 뭔가요?',
        date: '2019-10-10'
    },
    {
        title: '추출기는 어떻게 사용하나요?',
        date: '2019-10-10'
    },
    {
        title: '좀비격투 게임 보상 지급이 이상해요',
        date: '2019-10-10'
    },
    {
        title: '쿄통카드는 어떻게 받을 수 있나요?',
        date: '2019-10-10'
    },
    {
        title: '1:1 거래에서 취소를 했는데 물품이 돌아오지 않아요.',
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
                    <div className={styles.titleBox}>
                        <div className={styles.titleBoxInner}>
                            <h1>공지사항</h1>
                            <button className={common.moreBtn}>MORE</button>
                        </div>
                    </div>
                    {
                        noticeArray.map((row, index) => 
                            <div className={styles.row} key={index}>
                                <a>
                                    <span>{row.title}</span>
                                </a>
                                <span>{row.date}</span>
                            </div>
                        )
                    }
                </div>
                <div className={styles.faqBox}>
                    <div className={styles.titleBox}>
                        <div className={styles.titleBoxInner}>
                            <h1>FAQ</h1>
                            <button className={common.moreBtn}>MORE</button>
                        </div>
                    </div>
                    {
                        faqArray.map((row, index) => 
                            <div className={styles.row} key={index}>
                                <a>
                                    <span>{row.title}</span>
                                </a>
                                <span>{row.date}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}