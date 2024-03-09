const express = require('express')
const app = express()
const port = 8000
const cors = require('cors');

const mongoose = require('mongoose');
const User = require('./models/User');
const Board = require('./models/Board');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'webstoryboy';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect("mongodb+srv://webstupids:forever0@cluster0.icy3l1c.mongodb.net/blog?retryWrites=true&w=majority");

// 회원가입
app.post('/register', async (req, res) => {
    const { username, useremail, password } = req.body;
    // res.json({ "요청한 데이터": { username, useremail, password } });

    try {
        const userDoc = await User.create({
            username,
            useremail,
            password: bcrypt.hashSync(password, salt)
        })
        res.status(200).json(userDoc);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// 로그인
app.post('/login', async (req, res) => {
    const { useremail, password } = req.body;

    try {
        // 이메일 확인
        const userDoc = await User.findOne({ useremail });

        if (!userDoc) {
            return res.status(404).json({ message: "회원 데이터가 없습니다. 이메일 없음" });
        }

        // 패스워드 확인
        const passOk = await bcrypt.compare(password, userDoc.password);

        if (!passOk) {
            return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
        }


        // 로그인(토큰 발행)
        jwt.sign({ username: userDoc.username, useremail, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            // 발행한 토큰을 쿠키에 저장
            res.cookie('token', token, { httpOnly: true }).json({
                id: userDoc._id,
                username: userDoc.username,
                useremail,
                token
            });
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// 로그인 확인
app.get('/profile', (req, res) => {
    // res.json(req.cookies);
    const { token } = req.cookies;

    // 토큰 값 유효성 확인
    jwt.verify(token, secret, (err, info) => {
        if (err) {
            // 토큰 검증 실패 시 오류 처리
            return res.json({ message: '토큰 검증 실패. 다시 로그인 해주세요.' });
        }

        // 검증 성공 시 사용자 정보 반환
        res.json(info);
    });
});

// 로그아웃
app.post('/logout', (req, res) => {
    // 쿠키를 비워서 로그아웃 처리
    res.cookie('token', '').json({ message: 'ok' });
});


// 게시판
app.post('/board', uploadMiddleware.single('file'), async (req, res) => {
    // res.json({ files: req.file });
    // 이미지 설정
    let newPath;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        // res.json({ ext })
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, async (err, info) => {
        if (err) {
            return res.status(403).json({ message: "인증 실패" });
        }

        const { title, content } = req.body;
        const boardDoc = await Board.create({
            title,
            content,
            cover: newPath,
            author: info.id
        });

        res.json(boardDoc);
    });
});

// 게시판 글 가져오기
app.get('/post', async (req, res) => {
    res.json(
        await Board.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)
    )
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})