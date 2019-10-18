import React from 'react';
import ReactDOM from 'react-dom';
import './common/reset.css';
import './common/common.css';
import Header from './common/header.js';
import Adprofit from './indexComponent/adprofit/indexAdprofit.js';

const userInfo = {
    id: 'WSJH',
    admin: false
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header userInfo={userInfo} />
                <main>
                    <Adprofit />
                </main>
            </div>
        )
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('wrap')
);