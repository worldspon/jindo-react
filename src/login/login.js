import React from 'react';
import ReactDOM from 'react-dom';
import '../common/common.css';
import styles from './login.css';

class Login extends React.Component {
    constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.loginBox}>
          <img className={styles.loginLogo} src={require('../images/login-logo.png')} />
          <input className={styles.inputId} type="text" placeholder="아이디"></input>
          <input className={styles.inputPw} type="password" placeholder="비밀번호"></input>
          <button className={styles.loginButton}>로그인</button>
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