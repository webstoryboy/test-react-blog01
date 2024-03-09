import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext';


const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:8000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        })
    }, [setUserInfo]);

    const logout = () => {
        fetch('http://localhost:8000/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    // 경로에 따라 active 클래스를 설정하는 함수
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }

    return (
        <header id='header'>
            <div className='header__inner'>
                <h1 className='header__logo'>
                    <Link to='/'>webslopoer</Link>
                </h1>
                <nav className='header__nav'>
                    <ul>
                        <li className={isActive('/')}>
                            <Link to='/'>홈</Link>
                        </li>
                        <li className={isActive('/register')}>
                            <Link to='/register'>회원가입</Link>
                        </li>
                        <li className={isActive('/login')}>
                            <Link to='/login'>로그인</Link>
                        </li>
                        <li className={isActive('/board')}>
                            <Link to='/board'>게시판</Link>
                        </li>
                        <li className={isActive('/blog')}>
                            <Link to='/blog'>블로그</Link>
                        </li>
                    </ul>
                </nav>
                <div className='header__utils'>
                    <button className='search'>
                        <span className='blind'>search</span>
                    </button>
                    <button className='darkmode'>
                        <span className='blind'>dark mode</span>
                    </button>
                    <button className='navBtn'>
                        <span className='blind'>mobile menu</span>
                    </button>
                    {username && (
                        <a href='/' onClick={logout}>hello! {username}</a>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header