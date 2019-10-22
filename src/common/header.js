import React from 'react';
import styles from './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: false
        }
        // this.showSubMenu = this.showSubMenu.bind(this);
        // this.hideSubMenu = this.hideSubMenu.bind(this);
    }

    showSubMenu() {
        this.setState({subMenu: true});
    }

    hideSubMenu() {
        this.setState({subMenu: false});
    }

    render() {
        return (
            <header>
                <img className={styles.logo} src={require('../images/header-logo.png')} />
                <nav
                    onMouseOver={() => this.showSubMenu()}
                >
                    <ul className={styles.menu}>
                        <li className={styles.menu__category}>
                            <a href="/adprofit/adprofit.html">광고수익</a>
                        </li>
                        <li className={styles.menu__category}>
                            공지사항
                            <ul
                                className={styles.submenu}
                                style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                            >
                                <li>공지사항</li>
                                <li>업데이트</li>
                                <li>게시판</li>
                            </ul>
                        </li>
                        <li className={styles.menu__category}>FAQ</li>
                        <li className={styles.menu__category}>
                            1:1문의
                            <ul
                                className={styles.submenu}
                                style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                            >
                                <li>문의하기</li>
                                <li>내문의</li>
                            </ul>
                        </li>
                        <li className={styles.menu__category}>
                            게임결과
                            <ul
                                className={styles.submenu}
                                style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                            >
                                <li>게임기록</li>
                            </ul>
                        </li>
                        <li className={styles.menu__category}>게시판</li>
                        <li className={styles.menu__category}>
                            광고신청
                            <ul
                                className={styles.submenu}
                                style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                            >
                                <li>배너광고신청</li>
                                <li>한줄광고신청</li>
                            </ul>
                        </li>
                        {
                            this.props.userInfo.admin && <li className={styles.menu__category}>
                            관리자
                            <ul
                                className={styles.submenu}
                                style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                            >
                                <li>기록조회</li>
                                <li>캐시비관리</li>
                                <li>서비스관리</li>
                                <li>정지회원관리</li>
                            </ul>
                        </li>
                        }
                    </ul>
                </nav>
                <div className={styles.user__infoBox}>
                    <span className={styles.user__name}>{this.props.userInfo.id}님</span>
                    <button className={styles.logout}>로그아웃</button>
                </div>
                <div
                    className={styles.submenu__background}
                    style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                    onMouseOut={() => this.hideSubMenu()}
                ></div>
            </header>
        )
    }
}