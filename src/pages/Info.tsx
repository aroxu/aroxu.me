import './Info.css'
import '../Root.css'

const Info = () => (
  <>
    <div className='Info'>
      <div className='Info-container'>
        <p className='Info-header font-bold highlight-red text-black'>
          I think therefore I am.
        </p>
        <p className='Info-desc text-white'>
          <a
            className='Link font-bold'
            href='https://ce.pcu.ac.kr'
            target='_blank'
            rel='noopener noreferrer'>
            배재대학교 AI소프트웨어공학부
          </a>
          <span> 재학중</span>
        </p>
        <br />
        <span>
          <p className='Info-desc text-white'>
            💻 소프트웨어 엔지니어
            <br />
            <span className='Info-detail'>
              생각나는 것을 만드는 프로그래머 입니다.
              <br />
              어디에 쓰는건지 모르는 사람도 있겠지만
              <br />저 또는 주위에 필요하다고 느끼는것을 만듭니다.
            </span>
          </p>
          <br />
          <p className='Info-desc text-white'>
            🖌️ 일러스트레이터 (연습중)
            <br />
            <span className='Info-detail'>
              여가시간에 태블릿을 활용하여 생각나거나 그리고 싶은 것을
              그려냅니다.
              <br />
              주로 사람들의 모습을 보고 생각나는 것을 그려냅니다.
            </span>
          </p>
        </span>
      </div>

      <div className='Avatar' />
    </div>
  </>
)

export default Info
