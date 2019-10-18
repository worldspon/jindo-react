import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.userInfo
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
                <img className={"header__logo"} src={require('../images/header-logo.png')} />
                <nav
                    onMouseOver={(e) => this.showSubMenu(e)}
                >
                    <ul className={"header__menu"}>
                        <li className={"menu__category"}>
                            광고수익
                        </li>
                        <li className={"menu__category"}>
                            공지사항
                            <ul className={`submenu ${this.state.subMenu ? "display-block" : "display-none"}`}>
                                <li>공지사항</li>
                                <li>업데이트</li>
                                <li>게시판</li>
                            </ul>
                        </li>
                        <li className={"menu__category"}>FAQ</li>
                        <li className={"menu__category"}>
                            1:1문의
                            <ul className={`submenu ${this.state.subMenu ? "display-block" : "display-none"}`}>
                                <li>문의하기</li>
                                <li>내문의</li>
                            </ul>
                        </li>
                        <li className={"menu__category"}>
                            게임결과
                            <ul className={`submenu ${this.state.subMenu ? "display-block" : "display-none"}`}>
                                <li>게임기록</li>
                            </ul>
                        </li>
                        <li className={"menu__category"}>게시판</li>
                        <li className={"menu__category"}>
                            광고신청
                            <ul className={`submenu ${this.state.subMenu ? "display-block" : "display-none"}`}>
                                <li>배너광고신청</li>
                                <li>한줄광고신청</li>
                            </ul>
                        </li>
                        {
                            this.state.admin && <li className={"menu__category"}>
                            관리자
                            <ul className={`submenu ${this.state.subMenu ? "display-block" : "display-none"}`}>
                                <li>기록조회</li>
                                <li>캐시비관리</li>
                                <li>서비스관리</li>
                                <li>정지회원관리</li>
                            </ul>
                        </li>
                        }
                    </ul>
                </nav>
                <div className={"user-info-box"}>
                    <span className={"user-name"}>{this.state.id}님</span>
                    <button className={"logout-button"}>로그아웃</button>
                </div>
                <div
                    className={`submenu-background ${this.state.subMenu ? "display-block" : "display-none"}`}
                    onMouseOut={(e) => {this.hideSubMenu(e)}}
                ></div>
            </header>
        )
    }
}