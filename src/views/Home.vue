<template>
  <div class="home">
    <section class="home__carousel _section">
      <div class="_container">
        <div class="_row">
          <div class="home__carousel-main">
            <Carousel :slides="slides"/>
          </div>
          <div class="home__carousel-small">
            <Carousel :slides="slides2"/>
          </div>
        </div>
      </div>
    </section>
    <section class="_section">
      <div class="_container">
        <h2>Новинки</h2>
        <div class="_row">
          <Swiper
              :slides-per-view="slides_per_view"
              :space-between="0"
              navigation
          >
            <SwiperSlide v-for="(data, index) in news" :key="index">
              <div class="section__card-list">
                <Card :data="data"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <section class="_section banner">
      <div class="_row">
        <Swiper
            :slides-per-view="1"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            :autoplay="{delay: 3000, disableOnInteraction: false}"
        >
          <SwiperSlide v-for="(banner, index) in banners" :key="index">
            <img :src="banner" alt="">
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="_section">
      <div class="_container">
        <h2>Топ продаж</h2>
        <div class="_row">
          <Swiper
              :slides-per-view="slides_per_view"
              :space-between="0"
              navigation
          >
            <SwiperSlide v-for="(data, index) in news" :key="index">
              <div class="section__card-list">
                <Card :data="data"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <section class="_section all_products">
      <div class="_container">
        <h2>Все товары</h2>
        <div class="_row">
          <div class="section__card-list card" v-for="(data, index) in news" :key="index">
            <Card :data="data"/>
          </div>
        </div>
        <div class="btn__green">
          <a href="#!">
            Показать еще
          </a>
        </div>
      </div>
    </section>
    <section class="_section">
      <div class="_container section__partner">
        <div class="_row">
          <Swiper
              :slides-per-view="slides_per_view2"
              :space-between="0"
              navigation
              :autoplay="{delay: 2000, disableOnInteraction: false}"
              centeredSlides
              loop
          >
            <SwiperSlide v-for="(data, index) in partner" :key="index">
              <div class="section__partner-list">
                <img :src="data" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from "@/components/ui/Carousel";
import Card from "@/components/ui/Card";
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

SwiperCore.use([Navigation, Pagination, Autoplay]);
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

export default {
  name: 'Home',
  data() {
    return {
      slides_per_view: 4,
      slides_per_view2: 5,
      slides: [
        '/slider/1.png',
        '/slider/1.png',
        '/slider/1.png',
        '/slider/1.png',
        '/slider/1.png',
        '/slider/1.png',
      ],
      slides2: {
        content: [
          {
            icon: '/icon/1.svg',
            title: '50 + магазинов по всему миру',
            desc: 'Наши магазины размещены в более чем 50 городах и вы всегда можете выбрать товары в оффлайне'
          },
          {
            icon: '/icon/2.svg',
            title: '3 + магазинов по всему городу',
            desc: 'Наши магазины размещены в более чем 50 городах и вы всегда можете выбрать товары в оффлайне'
          },
        ]
      },
      news: [
        {
          img: '/products/01.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 4.1,
          },
          comment: 344,
          price: {
            discount: '20 000 000 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/02.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 4.7,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/03.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 3.5,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/04.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 2.5,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/01.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 4.1,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/02.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 4.7,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/03.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 3.5,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
        {
          img: '/products/04.png',
          name: 'Apple MacBook Pro Touch Bar 13" 8/256Gb Silver (MXK62)',
          article: 'AA42255',
          reviews: {
            count: 243,
            average: 2.5,
          },
          comment: 344,
          price: {
            discount: '20 000 000',
            real_price: '15 000 000'
          },
        },
      ],
      banners: [
        '/slider/2.png',
        '/slider/2.png',
        '/slider/2.png',
        '/slider/2.png',
        '/slider/2.png',
        '/slider/2.png',
      ],
      partner: [
        '/partner/1.png',
        '/partner/1.png',
        '/partner/1.png',
        '/partner/1.png',
        '/partner/1.png',
        '/partner/1.png',
      ],
    }
  },
  mounted() {
    if (window.innerWidth < 1269.98) {
      this.slides_per_view = 3
      this.slides_per_view2 = 5
    }
    if (window.innerWidth < 1199.98) {
      this.slides_per_view2 = 3
    }
    if (window.innerWidth < 991.98) {
      this.slides_per_view = 2
      this.slides_per_view2 = 2
    }
    if (window.innerWidth < 767.98) {
      this.slides_per_view = 2
      this.slides_per_view2 = 2
    }
    if (window.innerWidth < 576.98) {
      this.slides_per_view2 = 1
    }

  },
  components: {
    Carousel,
    Card,
    Swiper,
    SwiperSlide,
  }
}
</script>
