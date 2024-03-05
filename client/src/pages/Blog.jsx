import React from 'react'

const Blog = () => {
    return (
        <section className='blog__inner container mt100'>
            <h3>Starbuck's View</h3>
            <div className='blog__list'>
                <div className='blog'>
                    <a href="/">
                        <div className='blog__img' style={{ backgroundImage: 'url("/img/starbucks01.jpg")' }}></div>
                        <div className='blog__text'>
                            <strong className='title'>중국 스타벅스 1호점 라테뷰 거리 오픈</strong>
                            <div className='keyword'>
                                <span>starbucks</span>
                                <span>China</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='blog'>
                    <a href="/">
                        <div className='blog__img' style={{ backgroundImage: 'url("/img/starbucks02.jpg")' }}></div>
                        <div className='blog__text'>
                            <strong className='title'>세계에서 가장 큰 리져브 스타벅스가 중국에 있다.</strong>
                            <div className='keyword'>
                                <span>starbucks</span>
                                <span>China</span>
                                <span>reserve</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='blog'>
                    <a href="/">
                        <div className='blog__img' style={{ backgroundImage: 'url("/img/starbucks03.jpg")' }}></div>
                        <div className='blog__text'>
                            <strong className='title'>포브스가 선정한 꼭 가봐야 하는 스타벅스 리져브</strong>
                            <div className='keyword'>
                                <span>starbucks</span>
                                <span>China</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='blog'>
                    <a href="/">
                        <div className='blog__img' style={{ backgroundImage: 'url("/img/starbucks04.jpg")' }}></div>
                        <div className='blog__text'>
                            <strong className='title'>이런 스타벅스는 처음 볼껄! 전세계가 놀란 그 스타벅스</strong>
                            <div className='keyword'>
                                <span>starbucks</span>
                                <span>China</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog