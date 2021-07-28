import './Skills.css'

const Skills = () => (
  <>
    <div className='Skills'>
      <div className='Skills-container'>
        <p className='Skills-header font-bold highlight-lapis text-white'>
          Be creative, Be better.
        </p>
        <p className='Skills-desc text-white'>
          분석적이고 논리적이며 창의적인 것을 추구합니다.
        </p>
        <br />
        <span>
          <p className='Skills-desc text-white'>
            🕸️ {'<'}Full-Stack Developer{'/>'}
            <br />
            <span className='Skills-detail'>
              <a
                className='Link font-bold'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'>
                React.JS
              </a>
              ,{' '}
              <a
                className='Link font-bold'
                href='https://nextjs.org'
                target='_blank'
                rel='noopener noreferrer'>
                Next.JS
              </a>{' '}
              등을 이용하여 프론트엔드를 만듭니다.
              <br />
              <a
                className='Link font-bold'
                href='https://golang.org'
                target='_blank'
                rel='noopener noreferrer'>
                Go
              </a>{' '}
              언어, 또는{' '}
              <a
                className='Link font-bold'
                href='https://nestjs.com'
                target='_blank'
                rel='noopener noreferrer'>
                Nest.JS
              </a>
              를 이용하여 백엔드를 만듭니다.
              <br />
              세미콜론을 얼마나 많이 입력했는지 기억나지 않네요;
            </span>
          </p>
          <br />
          <p className='Skills-desc text-white'>
            📱 {'<'}Cross-Platform Developer{'/>'}
            <br />
            <span className='Skills-detail'>
              하나의 언어와 프레임워크로 효율적이게
              <br />
              여러 종류의 디바이스로 앱을 만듭니다.
              <br />
              <a
                className='Link font-bold'
                href='https://reactnative.dev'
                target='_blank'
                rel='noopener noreferrer'>
                React Native
              </a>
              와{' '}
              <a
                className='Link font-bold'
                href='https://flutter.dev'
                target='_blank'
                rel='noopener noreferrer'>
                Flutter
              </a>
              를 주로 다루며, Flutter를 더 선호합니다.
            </span>
          </p>
        </span>
      </div>

      <div className='Star text-white'>🌠</div>
    </div>
  </>
)

export default Skills
