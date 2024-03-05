import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            body: JSON.stringify({ username, useremail, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // console.log(response);

        if (response.status === 200) {
            alert("회원가입 완료!");
        } else {
            alert("회원가입 실패");
        }
    }

    return (
        <section className='member__inner'>
            <h3>회원가입</h3>
            <div className="join__form">
                <form onSubmit={register}>
                    <fieldset>
                        <legend className="blind">회원가입 영역</legend>
                        <div>
                            <label htmlFor="youName">이름</label>
                            <input
                                type="text"
                                id="youName"
                                name="youName"
                                placeholder="이름을 입력해주세요!"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <span className="msg"></span>
                        </div>
                        <div>
                            <label htmlFor="youEmail">이메일</label>
                            <input
                                type="text"
                                id="youEmail"
                                name="youEmail"
                                placeholder="이메일을 입력해주세요!"
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
                                name="youPW"
                                placeholder="비밀번호를 입력해주세요!"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="msg"></span>
                        </div>
                        <div className="join__btn">
                            <button>회원가입</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Register