import React, { useState, useContext } from 'react'
import { UserContext } from '../context/userContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const login = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            body: JSON.stringify({ useremail, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        // console.log(response)

        if (response.ok) {
            response.json().then(userInfo => {
                // console.log(userInfo);
                setRedirect(true);
                setUserInfo(userInfo);
            })
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <section className='member__inner'>
            <h3>로그인</h3>
            <div className="join__form">
                <form onSubmit={login}>
                    <fieldset>
                        <legend className="blind">로그인 영역</legend>
                        <div>
                            <label htmlFor="youEmail">이메일</label>
                            <input
                                type="text"
                                id="youEmail"
                                placeholder="이메일"
                                value={useremail}
                                onChange={e => setUseremail(e.target.value)}
                            />
                            <span className="msg"></span>
                        </div>
                        <div>
                            <label htmlFor="youPW">비밀번호</label>
                            <input
                                type="text"
                                id="youPW"
                                placeholder="비밀번호"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="msg"></span>
                        </div>
                        <div className="join__btn">
                            <button>로그인</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>

    )
}

export default Login