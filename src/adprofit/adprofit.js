import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'
import common from '../common/common.css';
import Header from '../common/header.js';

const userInfo = {
    id: 'WSJH',
    admin: true
}

class Adprofit extends React.Component {

    
    render() {
        return (
            <div className={common.wrap}>
                <Header userInfo={userInfo} />
            </div>
        )
    }
}

ReactDOM.render(
  <Adprofit />,
  document.getElementById('root')
);