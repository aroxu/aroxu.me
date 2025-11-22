import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Mousewheel,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import './Root.scss'
import Intro from './pages/Intro'
import Info from './pages/Info'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Copyright from './pages/Copyright'

const Root = () => (
  <>
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow]}
      mousewheel={true}
      keyboard={true}
      direction={'vertical'}
      effect='coverflow'
      speed={500}
      style={{ width: '100%', height: '100%' }}>
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
