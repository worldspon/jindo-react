import React from 'react';
import styles from './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: false,
            windowWidth: window.innerWidth,
            mobileMenu: false
        }

        this.nonMobileMenuClickEvent = this.nonMobileMenuClickEvent.bind(this);
    }

    showsubMenu() {
        this.setState({subMenu: true});
    }

    hidesubMenu() {
        this.setState({subMenu: false});
    }

    showMobileMenu() {
        this.setState({mobileMenu: true});
        document.addEventListener('click', this.nonMobileMenuClickEvent);
    }

    hideMobileMenu() {
        this.setState({mobileMenu: false});
        document.removeEventListener('click', this.nonMobileMenuClickEvent);
    }

    nonMobileMenuClickEvent(e) {
        if( e.target !== this.mobileMenu ) {
            this.hideMobileMenu();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: window.innerWidth});
            if( this.state.mobileMenu ) {
                this.setState({mobileMenu: false});
            }
        });
    }

    render() {
        const nav = 
        <nav onMouseOver={() => this.showsubMenu()}>
            <ul className={styles.menu}>
                <li className={styles.category}>
                    <a href="/adprofit/adprofit.html">광고수익</a>
                </li>
                <li className={styles.category}>
                    공지사항
                    <ul
                        className={styles.subMenu}
                        style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                    >
                        <li>공지사항</li>
                        <li>업데이트</li>
                        <li>게시판</li>
                    </ul>
                </li>
                <li className={styles.category}>FAQ</li>
                <li className={styles.category}>
                    1:1문의
                    <ul
                        className={styles.subMenu}
                        style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                    >
                        <li>문의하기</li>
                        <li>내문의</li>
                    </ul>
                </li>
                <li className={styles.category}>
                    게임결과
                    <ul
                        className={styles.subMenu}
                        style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                    >
                        <li>게임기록</li>
                    </ul>
                </li>
                <li className={styles.category}>게시판</li>
                <li className={styles.category}>
                    광고신청
                    <ul
                        className={styles.subMenu}
                        style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
                    >
                        <li>배너광고신청</li>
                        <li>한줄광고신청</li>
                    </ul>
                </li>
                {
                    this.props.userInfo.admin && <li className={styles.category}>
                    관리자
                    <ul
                        className={styles.subMenu}
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
        </nav>;

        const subMenuBackground =
        <div
            className={styles.subMenuBackground}
            style={this.state.subMenu ? {display: 'block'} : {display: 'none'}}
            onMouseOut={() => this.hidesubMenu()}>
        </div>;

        const mobileMenuImg =
        <img 
            className={styles.mobileMenuImg}
            src={require('../images/menu.png')}
            onClick={(e)=>this.showMobileMenu(e)} />;

        const mobileMenu =
        <div
            className={styles.mobileMenu}
            ref={(ref) => {
                this.mobileMenu = ref;
            }}>
            <img
                className={styles.mobileMenuAfterImg}
                src={require('../images/menu_after.png')}
                onClick={()=>this.hideMobileMenu()} />
            <nav>

            </nav>
        </div>
        return (
            <header>
                <img className={styles.logo} src={require('../images/header-logo.png')} />
                {window.innerWidth > 1366 ? nav : mobileMenuImg}
                <div className={styles.userBox}>
                    <span className={styles.userName}>{this.props.userInfo.id}님</span>
                    <button className={styles.logout}>로그아웃</button>
                </div>
                {window.innerWidth > 1366 ? subMenuBackground : ''}
                {this.state.mobileMenu ? mobileMenu : ''}
            </header>
        )
    }
}