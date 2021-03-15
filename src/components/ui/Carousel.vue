<template>
    <div class="slider__body" v-if="slides.content">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(slide, idx) in slides.content" :key="idx">
          <div class="slider__card">
            <img :src="slide.icon" alt="" >
            <p>{{slide.title}}</p>
            <span>{{slide.desc}}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider__body" v-else>
      <Swiper
          :slides-per-view="1"
          :space-between="0"
          :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
          <div class="slider__image">
            <img :src="slide" alt="" >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script>
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([Pagination]);
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
export default {
  props:{
    slides: {}
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
  },
}
</script>

<style lang="scss" >
@import "../../assets/scss/ui/carousel";
</style>