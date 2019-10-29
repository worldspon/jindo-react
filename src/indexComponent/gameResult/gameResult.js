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

export default class raceFaq extends React.Component {
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

    async getRaceData(url) {
        try {
            const raceData = await this.getFetch(url);
            const raceArray = raceData.zombieRaces.map((row, index) => 
                <tr className={styles.row} key={index}>
                    <th>{row.count}</th>
                    <th>{row.win1}</th>
                    <th>{row.win2}</th>
                    <th>{row.win3}</th>
                    <th>{row.win4}</th>
                    <th>{row.win5}</th>
                </tr>
            )
            this.setState({race: raceArray});
        } catch(error) {
            console.log(error);
        }
    }

    async getFightData(url) {
        try {
            const fightData = await this.getFetch(url);
            const fightArray = fightData.zombieFights.map((row, index) => 
                <tr className={styles.row} key={index}>
                    <th>{row.count}</th>
                    <th>{row.leftPlayer}</th>
                    <th>{row.rightPlayer}</th>
                    <th>{row.winner}</th>
                    <th>{row.ko ? 'KO승' : '판정승'}</th>
                </tr>
            )
            this.setState({fight: fightArray});
        } catch(error) {
            console.log(error);
        }
    }

    async getBreakData(url) {
        try {
            const breakData = await this.getFetch(url);
            const breakArray = breakData.zombieBreaks.map((row, index) => 
                <tr className={styles.row} key={index}>
                    <th>{row.count}</th>
                    <th>{row.leftPlayer}</th>
                    <th>{row.rightPlayer}</th>
                    <th>{row.leftBroken}</th>
                    <th>{row.rightBroken}</th>
                    <th>{row.winner}</th>
                </tr>
            )
            this.setState({break: breakArray});
        } catch(error) {
            console.log(error);
        }
    }

    async getDropData(url) {
        try {
            const dropData = await this.getFetch(url);
            const dropArray = dropData.zombieDrops.map((row, index) => 
                <tr className={styles.row} key={index}>
                    <th>{row.count}</th>
                    <th>{row.result[0]}</th>
                    <th>{row.result[1]}</th>
                    <th>{row.result[2]}</th>
                    <th>{row.result[3]}</th>
                    <th>{row.result[4]}</th>
                    <th>{row.result[5]}</th>
                </tr>
            )
            this.setState({drop: dropArray});
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getRaceData('/api/main/game/zombieRace');
        this.getFightData('/api/main/game/zombieFight');
        this.getBreakData('/api/main/game/zombieBreak');
        this.getDropData('/api/main/game/zombieDrop');
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
                    <div className={styles.zombieRace}>
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
                                {this.state.race}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.zombieFignt}>
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
                                {this.state.fight}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.zombieBreak}>
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
                                {this.state.break}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.zombieDrop}>
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
                                {this.state.drop}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
