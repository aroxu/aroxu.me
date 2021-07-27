import './Contact.css'
import '../Root.css'

const Contact = () => (
  <>
    <div className='Contact'>
      <div className='Contact-container'>
        <p className='Contact-header font-bold highlight-white text-black'>
          Feel free to contact.
        </p>
        <span>
          <p className='Contact-desc text-white'>
            📮 이메일
            <br />
            <span className='Contact-detail'>
              <a
                className='Link font-bold'
                href='mailto:zeus8502@gmail.com'
                target='_blank'
                rel='noopener noreferrer'>
                여기
              </a>{' '}
              또는{' '}
              <a
                className='Link font-bold'
                href='mailto:zeus_02@naver.com'
                target='_blank'
                rel='noopener noreferrer'>
                여기
              </a>
              를 눌러서 저에게 이메일을 보낼 수 있습니다.
            </span>
          </p>
        </span>
      </div>

      <div className='Mail text-white'>📬</div>
    </div>
  </>
)

export default Contact
