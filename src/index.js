import fetchAsync from './common/fetch.js';

import React from 'react';
import ReactDOM from 'react-dom';
import common from './common/common.css';
import Header from './common/header.js';
import Adprofit from './indexComponent/adprofit/indexAdprofit.js';
import AdprofitChart from './indexComponent/adprofitChart/indexAdprofitChart.js';
import NoticeFaq from './indexComponent/noticeFaq/noticeFaq.js';
import GameResult from './indexComponent/gameResult/gameResult.js';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={common.wrap}>
                <Header userInfo={this.props.userInfo}/>
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

getValidateLoginData('/api/loginCheck');

async function getValidateLoginData(url) {
    try {
        const fetchResponse = await fetchAsync.get(url);
        if(fetchResponse.ok) {
            const loginData = await fetchResponse.json();
            ReactDOM.render(
                <Index userInfo={loginData} />,
                document.getElementById('root')
            );
        } else {
            const errorData = await fetchRespnse.json();
            alert(errorData.error);
            location.href="/login/login.html";
        }
    } catch(error) {
        location.href="/login/login.html";
    }
}