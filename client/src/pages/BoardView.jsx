import React from 'react'

const BoardView = () => {
    return (
        <section className='board__inner container'>
            <h3 className='blind'>게시글 보기</h3>
            <div className='board__view'>
                <h4>하이퍼클로바X, 한국판 AI 능력 평가에서 글로벌 최고 수준 AI 넘어서</h4>
                <div className='info'>
                    <span>2023.10.03</span>
                    <span>webs</span>
                </div>
                <div className='contents'>
                    <p>
                        네이버클라우드(대표 김유원)는 하이퍼클로바X(HyperCLOVA X)가 한국판 AI 성능 평가 체계 ‘KMMLU(Measuring Massive Multitask Language Understanding in Korean)’*에서 오픈AI, 구글의 생성형 AI보다 높은 점수를 기록하며 소버린 AI로서 우수한 성능 경쟁력을 확인할 수 있었다고 27일 밝혔다.
                        * KMMLU: Measuring Massive Multitask Language Understanding in Korean (https://arxiv.org/abs/2402.11548
                    </p>
                    <p>
                        KMMLU는 국내의 대표적인 오픈소스 언어모델 연구팀인 ‘해례(HAE-RAE)’가 이끈 AI 성능 평가 지표 구축 프로젝트다. 인문학, 사회학, 과학∙기술 등 45개 분야에서 전문가 수준의 지식을 묻는 35,030개 문항으로 구성되어 있다. 수학적 추론 능력과 같이 전세계 공통적으로 적용 가능한 광범위한 지식을 묻는 문항 비중이 약 80%, 한반도 지리, 국내법 등 한국 특화 문제 해결 능력을 평가하기 위한 문항은 20%로, AI의 보편적 능력과 로컬 지식을 고르게 측정해 한국 사용자에게 유용한 AI를 종합적으로 판단할 수 있다.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BoardView