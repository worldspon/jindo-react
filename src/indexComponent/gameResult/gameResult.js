import React from 'react';
import common from '../../common/common.css';
import styles from './gameResult.css';

const month = new Date().getMonth() +1;
const day = new Date().getDate();

const race = [
    {
        count: 139,
        result: ['코코엄마', '알바생', '복서', '돌쇠']
    },
    {
        count: 138,
        result: ['코코엄마', '알바생', '복서', '돌쇠']
    },
    {
        count: 137,
        result: ['코코엄마', '알바생', '복서', '돌쇠']
    },
    {
        count: 136,
        result: ['코코엄마', '알바생', '복서', '돌쇠']
    },
    {
        count: 135,
        result: ['코코엄마', '알바생', '복서', '돌쇠']
    }
];

export default class NoticeFaq extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.gameResultBox}>
                <div className={styles.titleBox}>
                    <div className={styles.titleBoxInner}>
                        <h1>게임결과</h1>
                        <button className={common.moreBtn}>MORE</button>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.contentInner}>
                        <h2 className={styles.title}>{month}.{day} 좀비레이스 결과</h2>
                        <table className={styles.gameTable}>
                            <thead>
                                <tr className={styles.headRow}>
                                    <th>회차</th>
                                    <th>1등</th>
                                    <th>2등</th>
                                    <th>3등</th>
                                    <th>4등</th>
                                    <th>5등</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.row}>
                                    <th>480</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.contentInner}>
                        <h2 className={styles.title}>{month}.{day} 좀비격투 결과</h2>
                        <table className={styles.gameTable}>
                            <thead>
                                <tr className={styles.headRow}>
                                    <th>회차</th>
                                    <th>좌측</th>
                                    <th>우측</th>
                                    <th>승자</th>
                                    <th>KO여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.row}>
                                    <th>480</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>판정승</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>판정승</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>판정승</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>480</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>판정승</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>피아니스트</th>
                                    <th>판정승</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.contentInner}>
                        <h2 className={styles.title}>{month}.{day} 좀비격파 결과</h2>
                        <table className={styles.gameTable}>
                            <thead>
                                <tr className={styles.headRow}>
                                    <th>회차</th>
                                    <th>좌측</th>
                                    <th>격파수</th>
                                    <th>우측</th>
                                    <th>격파수</th>
                                    <th>승자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.row}>
                                    <th>288</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                    <th>10</th>
                                    <th>피아니스트</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.contentInner}>
                        <h2 className={styles.title}>{month}.{day} 좀비낙하 결과</h2>
                        <table className={styles.gameTable}>
                            <thead>
                                <tr className={styles.headRow}>
                                    <th>회차</th>
                                    <th>1번</th>
                                    <th>2번</th>
                                    <th>3번</th>
                                    <th>4번</th>
                                    <th>5번</th>
                                    <th>6번</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.row}>
                                    <th>488</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                </tr>
                                <tr className={styles.row}>
                                    <th>139</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                    <th>45</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
