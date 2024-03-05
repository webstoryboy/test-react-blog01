import React from 'react'

const Board = () => {
    return (
        <section className='board__inner container'>
            <h3>webs 게시판</h3>
            <div className='board__table'>
                <table>
                    <caption className='blind'>게시판 목록 표</caption>
                    <colgroup>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
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
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Board