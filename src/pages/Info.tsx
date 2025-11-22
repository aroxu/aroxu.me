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
            href='https://google.com/search?q=컴퓨터공학과'
            target='_blank'
            rel='noopener noreferrer'>
            컴퓨터공학과
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
      </div>

      <div className='Avatar-container'>
        <div className='Avatar' />
      </div>
    </div>
  </>
)

export default Info
