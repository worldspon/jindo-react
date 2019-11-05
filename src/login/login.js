import FetchAsync from '../common/fetch.js';
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
    this.passwordInput = React.createRef();
    this.loginButton = React.createRef();
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

  // id input에서 enter 입력시 password input으로 focus
  focusPasswordInput(e) {
    if(e.key === 'Enter') {
      this.passwordInput.current.focus();
    }
  }

  // password input에서 enter 입력시 로그인 시도
  emitLoginEvent(e) {
    if(e.key === 'Enter') {
      this.tryLogin();
    }
  }

  // 로그인 시도
  async tryLogin() {
    try {
      const fetchResponse = await FetchAsync.post('/api/login', this.state);

      // fetchResponse.ok boolean 값으로 통신오류를 검증한다.
      if(fetchResponse.ok) {
        location.href="/";
      } else {
        let message = '';

        // id, pw, 공백 등 검증에러시 500 그 외 알수없는 오류
        if(fetchResponse.status === 500) {
          message = await fetchResponse.json();
          message = message.error;
        } else {
          message = '오류가 발생하였습니다\n다시 시도해주세요.';
        }
        // message 설정 후 Error throw
        throw Error(message);
      }
    } catch(error) {
      // 로그인 실패시
      alert(error.message);
    }
  }

  async tryLogout() {
    try {
      const fetchResponse = await FetchAsync.delete('/api/logout');
      if(fetchResponse.ok) {
        const loginData = await fetchResponse.json();
        alert(loginData.message);
        location.href="/login/login.html";
      } else {
        const loginData = await fetchResponse.json();
        throw new Error(loginData.error);
      }
      alert(loginData.data.message);
    } catch(error) {
        // 로그인 실패시
        alert(error.message);
    }
  }  

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.loginBox}>
          <img className={styles.loginLogo} src={require('../images/login-logo.png')} />

          <input
            className={styles.inputId}
            type="text" placeholder="아이디" value={this.state.username}
            onChange={(e)=> this.idChange(e)}
            onKeyPress={(e) => {this.focusPasswordInput(e)}}>
          </input>

          <input
            ref={this.passwordInput}
            className={styles.inputPw}
            type="password" placeholder="비밀번호" value={this.state.password}
            onChange={(e) => this.pwChange(e)}
            onKeyPress={(e) => {this.emitLoginEvent(e)}}>
          </input>

          <button
            ref={this.loginButton}
            className={styles.loginButton}
            onClick={() => {this.tryLogin()}}>로그인
          </button>
          <button className={styles.loginButton} onClick={() => {this.tryLogout()}}>로그아웃</button>
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