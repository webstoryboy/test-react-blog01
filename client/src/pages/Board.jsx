import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Board = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/post').then(response => {
            response.json().then(boards => {
                console.log(boards);
                setBoards(boards);
            })
        })
    }, []);

    return (
        <section className='board__inner container'>
            <h3 className='blind'>게시판</h3>
            <div className='board__search'>
                <div className='search'>
                    <input type="search" placeholder='search' />
                    <button className='searchBtn'></button>
                </div>
                <div className='btn'>
                    <a href="/boardWrite">글쓰기</a>
                </div>
            </div>
            <div className='board__table'>
                <table>
                    <caption className='blind'>게시판 목록 표</caption>
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>등록자</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.length > 0 && boards.map((post, index) => (
                            <tr key={post._id}>
                                <td>{index + 1}</td>
                                <td><Link to={`/board/${post._id}`}>{post.title}</Link></td>
                                <td>{post.author.username}</td>
                                <td>{new Date(post.createdAt).toISOString().split('T')[0]}</td>
                                <td>{post.view}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="board__page">
                <a href="/" className='pageLeft'>
                    <span className='blind'>이전</span>
                </a>
                <ul>
                    <li><a href="/" className='active'>1</a></li>
                </ul>
                <a href="/" className='pageRight'>
                    <span className='blind'>다음</span>
                </a>
            </div>
        </section>
    )
}

export default Board