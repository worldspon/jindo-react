import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'
import common from './common/common.css';
import Header from './common/header.js';
import Adprofit from './indexComponent/adprofit/indexAdprofit.js';
import AdprofitChart from './indexComponent/adprofitChart/indexAdprofitChart.js';
import NoticeFaq from './indexComponent/noticeFaq/noticeFaq.js';
import GameResult from './indexComponent/gameResult/gameResult.js';

const userInfo = {
    id: 'WSJH',
    admin: true
}


class Index extends React.Component {

    
    render() {
        return (
            <div className={common.wrap}>
                <Header userInfo={userInfo} />
                <div className={common.main}>
                    <Adprofit />
                    <AdprofitChart />
                    <NoticeFaq />
                    <GameResult />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);