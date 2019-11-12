import FetchAsync from '../common/fetch.js';
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

    toggleMobileSubMenu(e) {
        if(e.target.children[0].style.display === '' || e.target.children[0].style.display === 'none') {
            e.target.children[0].style.display = 'flex';
        } else {
            e.target.children[0].style.display = 'none';
        }
    }

    nonMobileMenuClickEvent(e) {
        const nodeArray = [];
        nodeArray.push(this.mobileMenu);
        this.createNodeArray(this.mobileMenu.childNodes, nodeArray);
        if(nodeArray.indexOf(e.target) === -1) {
            this.hideMobileMenu();
        }
    }

    createNodeArray(nodes, array) {
        for(let index = 0; index < nodes.length; index++) {
            array.push(nodes[index]);
            this.createNodeArray(nodes[index].childNodes, array);
        }
    }

    async tryLogout() {
        try {
          const fetchResponse = await FetchAsync.delete('/api/logout');
          if(fetchResponse.ok) {
            const loginData = await fetchResponse.json();
            alert(loginData.message);
            location.href="/";
          } else {
            const loginData = await fetchResponse.json();
            throw new Error(loginData.error);
          }
        } catch(error) {
            // 로그인 실패시
            alert(error.message);
        }
    }


    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: window.innerWidth});
            if( this.state.mobileMenu ) {
                document.removeEventListener('click', this.nonMobileMenuClickEvent);
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
                        <li>
                            <a href="/all">공지사항</a>
                        </li>
                        <li>
                            <a href="/update">업데이트</a>
                        </li>
                        <li>
                            <a href="/event">이벤트</a>
                        </li>
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
            }}
        >
            <img
                className={styles.mobileMenuAfterImg}
                src={require('../images/menu_after.png')}
                onClick={()=>this.hideMobileMenu()} />
            <nav
                className={styles.mobileNav}
                ref={(ref) => {
                    this.mobileNav = ref;
                }}
            >
                <ul className={styles.mobileMenuList}>
                    <li className={styles.mobileMenuCategory}>
                        광고수익
                    </li>
                    <li className={styles.mobileMenuCategory}
                        onClick={(e) => this.toggleMobileSubMenu(e)}>
                        공지사항
                        <ul className={styles.mobileSubMenu}>
                            <li>
                                <a>전체</a>
                            </li>
                            <li>
                                <a>공지사항</a>
                            </li>
                            <li>
                                <a>업데이트</a>
                            </li>
                            <li>
                                <a>이벤트</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.mobileMenuCategory}>FAQ</li>
                    <li className={styles.mobileMenuCategory}
                        onClick={(e) => this.toggleMobileSubMenu(e)}>
                        1:1문의
                        <ul className={styles.mobileSubMenu}>
                            <li>
                                <a>1:1문의</a>
                            </li>
                            <li>
                                <a>내문의</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.mobileMenuCategory}>게임결과</li>
                    <li className={styles.mobileMenuCategory}>게시판</li>
                    <li className={styles.mobileMenuCategory}
                        onClick={(e) => this.toggleMobileSubMenu(e)}>
                        광고신청
                        <ul className={styles.mobileSubMenu}>
                            <li>
                                <a>한줄광고신청</a>
                            </li>
                            <li>
                                <a>배너광고신청</a>
                            </li>
                        </ul>
                    </li>
                    {
                        this.props.userInfo.admin &&
                        <li className={styles.mobileMenuCategory}
                            onClick={(e) => this.toggleMobileSubMenu(e)}>
                            관리자
                            <ul className={styles.mobileSubMenu}>
                                <li>
                                    <a>기록조회</a>
                                </li>
                                <li>
                                    <a>캐시비관리</a>
                                </li>
                                <li>
                                    <a>서비스관리</a>
                                </li>
                                <li>
                                    <a>정지회원관리</a>
                                </li>
                            </ul>
                        </li>
                    }
                </ul>
            </nav>
        </div>
        return (
            <header>
                <img className={styles.logo} src={require('../images/header-logo.png')} />
                {window.innerWidth > 1366 ? nav : mobileMenuImg}
                <div className={styles.userBox}>
                    <span className={styles.userName}>{this.props.userInfo.trademark}님</span>
                    <button className={styles.logout} onClick={() => {this.tryLogout()}}>로그아웃</button>
                </div>
                {window.innerWidth > 1366 ? subMenuBackground : ''}
                {this.state.mobileMenu ? mobileMenu : ''}
            </header>
        )
    }
}