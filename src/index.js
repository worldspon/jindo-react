import React from 'react';
import ReactDOM from 'react-dom';
import common from './common/common.css';
import styles from './index.css';
import Header from './common/header.js';
import Adprofit from './indexComponent/adprofit/indexAdprofit.js';

const userInfo = {
    id: 'WSJH',
    admin: false
}

const prevMonth = {
    month: 9,
    total: 281.47
}

const currentMonth = {
    month: 10,
    total: 217.57
}

class Index extends React.Component {
    render() {
        return (
            <div className={common.wrap}>
                <Header userInfo={userInfo} />
                <div className={common.main}>
                    <Adprofit prevMonth={prevMonth} currentMonth={currentMonth} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);