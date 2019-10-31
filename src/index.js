import 'whatwg-fetch';
import 'abortcontroller-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
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
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className={common.wrap}>
                <Header userInfo={userInfo}/>
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
        const fetchRespnse = await getFetch(url);
// fetchRespnse.ok
        if(true) {
            // const loginData = await fetchRespnse.json();
            ReactDOM.render(
                <Index />,
                document.getElementById('root')
            );
        } else {
            const errorData = await fetchRespnse.json();
            // alert(errorData.error);
            // location.href="http://192.168.0.25:8080/login/login.html";
        }


    } catch(error) {
        alert('오류가 발생하였습니다. 다시 시도해주세요.')
        location.href="http://192.168.0.25:8080/login/login.html";
    }
}

function getFetch(url) {
    return fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(res => res)
    .catch(e => {throw new Error()})
}