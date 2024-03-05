import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Home from './pages/Home'
import Board from './pages/Board'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/layout/Footer'
import { UserContextProvider } from './context/userContext';

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/board" element={<Board />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App