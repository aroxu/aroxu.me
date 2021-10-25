import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
// Import Swiper extensions
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/core'

import './Root.scss'
import Intro from './pages/Intro'
import Info from './pages/Info'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Copyright from './pages/Copyright'

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow])

const Root = () => (
  <>
    <Swiper
      mousewheel={true}
      keyboard={true}
      direction={'vertical'}
      effect='coverflow'
      speed={500}>
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
