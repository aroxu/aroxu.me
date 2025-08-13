import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Root.scss'
import Intro from './pages/Intro'
import Info from './pages/Info'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Copyright from './pages/Copyright'

const Root = () => (
  <>
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      mousewheel={{
        enabled: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      direction='vertical'
      speed={500}
      spaceBetween={0}
      slidesPerView={1}
      allowTouchMove={true}
      style={{ height: '100vh', width: '100vw' }}>
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <Info />
      </SwiperSlide>
      <SwiperSlide>
        <Skills />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
      <SwiperSlide>
        <Copyright />
      </SwiperSlide>
    </Swiper>
  </>
)

export default Root
