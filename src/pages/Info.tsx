import '../Root.scss'
import './Info.css'

const Info = () => (
  <>
    <div className='Info'>
      <div className='Info-container'>
        <p className='Info-header font-bold highlight-ocean text-black'>
          I think, therefore, I am.
        </p>
        <p className='Info-desc text-white'>
          <a
            className='Link font-bold'
            href='https://hakgwa.pcu.ac.kr/ce'
            target='_blank'
            rel='noopener noreferrer'>
            AI소프트웨어공학부
          </a>
          <span> 주전공 이수중</span>
        </p>
        <br />
        <span>
          <p className='Info-desc text-white'>
            💻 소프트웨어 엔지니어
            <br />
            <span className='Info-detail'>
              생각나는 것을 만드는 프로그래머입니다.
              <br />저 또는 주위에 필요하다고 느끼는 것을 만듭니다.
            </span>
          </p>
        </span>
        <br />

        <p className='Info-desc text-white'>
          <a
            className='Link font-bold'
            href='https://hakgwa.pcu.ac.kr/artwebtoon'
            target='_blank'
            rel='noopener noreferrer'>
            아트앤웹툰학과
          </a>
          <span> 복수전공 이수중</span>
        </p>

        <br />
        <span>
          <p className='Info-desc text-white'>
            🖌️ 일러스트레이터 (연습 중)
            <br />
            <span className='Info-detail'>
              여가시간에 타블릿을 활용하여 생각나거나 그리고 싶은 것을
              그려냅니다.
              <br />
              대체로 여러가지 매체로부터 영감을 받고 그림을 그려냅니다.
            </span>
          </p>
        </span>
      </div>

      <div className='Avatar-container'>
        <div className='Avatar' />
      </div>
    </div>
  </>
)

export default Info
