import 'whatwg-fetch';
import 'abortcontroller-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import '../common/common.css';
import styles from './login.css';

class Login extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  idChange(e) {
    this.setState({
      username: e.target.value.trim()
    });
  }

  pwChange(e) {
    this.setState({
      password: e.target.value.trim()
    });
  }

  getFetch(url, data) {
    return fetch(url,{
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response => response)
  }

  // 수익 데이터 비동기 통신 종료 후 화폐 형식으로 저장
  async getIncomeData(url, data) {
      try {
          const incomeData = await this.getFetch(url, data);
          console.log(incomeData);
          const jsonData = await incomeData.json();
          console.log(jsonData);
      } catch(error) {
          // 로그인 실패시
          console.log(error);
      }
  }

  async trylogout() {
    try {
      const incomeData = await this.logoutFetch();
      console.log(incomeData);
      const jsonData = await incomeData.json();
      console.log(jsonData);
    } catch(error) {
        // 로그인 실패시
        console.log(error);
    }
  }

  logoutFetch() {
    return fetch('/api/logout',{
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response)
  }

  

  render() {
    // this.getIncomeData("/api/login", {username: '월드스폰', password: '90990765'});
    this.trylogout();
    this.trylogout();
    this.trylogout();
    this.trylogout();
    return (
      <div className={styles.wrap}>
        <div className={styles.loginBox}>
          <img className={styles.loginLogo} src={require('../images/login-logo.png')} />
          <input className={styles.inputId} type="text" placeholder="아이디" value={this.state.username} onChange={(e)=> this.idChange(e)}></input>
          <input className={styles.inputPw} type="password" placeholder="비밀번호" value={this.state.password} onChange={(e) => this.pwChange(e)}></input>
          <button className={styles.loginButton}>로그인</button>
          <button className={styles.loginButton} onClick={() => this.trylogout()}>로그아웃</button>
          <p className={styles.copyright}>Copyright 2019 WORLDSPON Inc. All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);