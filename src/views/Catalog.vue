<template>
  <div class="catalog _section">
    <div class="_container">
      <div class="_row">
        <div class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z" fill="#CCCCCC"/>
          </svg>
          <span>Категории</span>
        </div>
        <CatalogSidebar />
        <div class="catalog__products">
          <div class="catalog__products-list" v-for="(data, index) in news" :key="index">
            <Card :data="data"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CatalogSidebar from "@/components/CatalogSidebar";
import Card from "@/components/ui/Card";


export default {
  name: 'Catalog',
  data() {
    return {
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
      colorActive:[],
      materialActive:[]
    }
  },
  methods: {
    colorActivePush(e, index) {
      if (index !== null){
        this.color[index].active = !this.color[index].active
      }
      this.colorActive = []
      this.color.filter(elm =>{
        if (elm.active === true){
          this.colorActive.push(elm)
        }
      })
    },
    colorActiveDelete(){
      let res = []
      this.colorActive.filter(elm =>{
        if (elm.active === true){
          res.push(elm)
        }
      })
      this.colorActive = res
    },
    materialActivePush(e, index) {
      if (index !== null){
        this.material[index].active = !this.material[index].active
      }
      this.materialActive = []
      this.material.filter(elm =>{
        if (elm.active === true){
          this.materialActive.push(elm)
        }
      })
    },
    materialActiveDelete(){
      let res = []
      this.materialActive.filter(elm =>{
        if (elm.active === true){
          res.push(elm)
        }
      })
      this.materialActive = res
    },
    deleteAll(){
      this.colorActive = []
      this.materialActive = []
      for (let i = 0; i < this.material.length; i++) {
        this.material[i].active = false
      }
      for (let i = 0; i < this.color.length; i++) {
        this.color[i].active = false
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  components:{
    CatalogSidebar,
    Card
  }
}
</script>
