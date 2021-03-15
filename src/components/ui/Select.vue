<template>
  <div class="select">
    <div class="select__value" @click="open = !open">
      <div class="select__text" v-text="value[optionValue]"></div>
      <div class="select__icon">
        <img :class="{open: open}" src="../../assets/img/arrow.svg" alt="">
      </div>
    </div>
    <div class="select__list" v-if="open">
      <div class="select__item"
           v-for="(item, index) in options"
           :key="index"
           @click="inputValue(item)"

           :class="{active: value === item}"
      >
        {{item[optionValue]}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  props:{
    options:{},
    value: {},
    optionId: String,
    optionValue: String
  },
  methods:{
    inputValue(e){
      this.$emit('change', e)
      this.hide()
    },
    hide(){
      this.open = false;
    }
  },
  mounted() {
    document.addEventListener('click', (e)=>{
      if (!e.target.closest('.select')){
        this.hide()
      }
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/ui/select";
</style>