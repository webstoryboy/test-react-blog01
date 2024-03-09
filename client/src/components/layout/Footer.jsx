import React from 'react'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer__inner container'>
                <div className='left'>
                    <h6>Websloper Blog</h6>
                    <p>Copyright © WEBS Corp. All Rights Reserved.</p>
                    <div className="sns">
                        <ul>
                            <li><a href="/"><span className="blind">인스타그램</span></a></li>
                            <li><a href="/"><span className="blind">깃헙</span></a></li>
                            <li><a href="/"><span className="blind">유튜브</span></a></li>
                            <li><a href="/"><span className="blind">웹스토리보이</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer