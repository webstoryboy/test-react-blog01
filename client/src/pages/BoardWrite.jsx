import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const BoardWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const boardWrite = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('content', content);
        data.set('file', files[0]);

        // console.log(files)

        const response = await fetch('http://localhost:8000/board', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        // console.log(await response.json());

        if (response.ok) {
            alert("글쓰기 성공!!")
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/board'} />
    }

    return (
        <section className='board__inner container'>
            <h3 className='blind'>게시판 글쓰기</h3>
            <div className='board__write'>
                <form onSubmit={boardWrite}>
                    <fieldset>
                        <legend className="blind">게시글 작성하기</legend>
                        <div>
                            <label htmlFor="boardTitle">제목</label>
                            <input
                                type="text"
                                id="boardTitle"
                                name="boardTitle"
                                placeholder='제목을 작성하세요!'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <ReactQuill
                                value={content}
                                modules={modules}
                                formats={formats}
                                onChange={newValue => setContent(newValue)}
                            />
                        </div>
                        <div>
                            <label htmlFor="boardFile">파일</label>
                            <input
                                type='file'
                                id='boardFile'
                                name='boardFile'
                                onChange={e => setFiles(e.target.files)}
                            />
                        </div>
                        <div className="btn">
                            <button type="submit">저장하기</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default BoardWrite