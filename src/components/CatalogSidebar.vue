<template>
  <div class="catalog__head">
    <div class="catalog__head-filter">
      <button @click="filerActive = !filerActive">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.75 0H0.75V16H16.75V0Z" fill="white" fill-opacity="0.01"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29581 2.79095C2.37742 2.61362 2.55479 2.5 2.75001 2.5H14.75C14.9452 2.5 15.1226 2.61362 15.2042 2.79095C15.2858 2.96829 15.2568 3.17691 15.1298 3.3252L10.45 8.79074V14C10.45 14.1728 10.3607 14.3334 10.2139 14.4247C10.0671 14.5159 9.8836 14.5248 9.72862 14.4483L7.32862 13.2631C7.15801 13.1789 7.05001 13.0051 7.05001 12.8148V8.79074L2.37021 3.3252C2.24324 3.17691 2.21419 2.96829 2.29581 2.79095ZM3.83637 3.5L7.92981 8.28073C8.00738 8.37132 8.05001 8.48666 8.05001 8.60593V12.5041L9.45001 13.1954V8.60593C9.45001 8.48666 9.49264 8.37132 9.57021 8.28073L13.6636 3.5H3.83637Z" fill="#CCCCCC"/>
        </svg>
        Фильтр (2)
        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M22.0133 0H0.986694V16H22.0133V0Z" fill="white" fill-opacity="0.01"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.8451 3.64645C9.10171 3.45118 9.51775 3.45118 9.77436 3.64645L15.031 7.64645C15.2876 7.84171 15.2876 8.15829 15.031 8.35355L9.77436 12.3536C9.51775 12.5488 9.10171 12.5488 8.8451 12.3536C8.5885 12.1583 8.5885 11.8417 8.8451 11.6464L13.6371 8L8.8451 4.35355C8.5885 4.15829 8.5885 3.84171 8.8451 3.64645Z" fill="var(--grey)"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="21.0266" height="16" fill="white" transform="translate(0.986694)"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <div class="catalog__head-title">Категории</div>
    <div class="catalog__head-filter">
      <button @click="sortActive = !sortActive">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0H0V16H16V0Z" fill="white" fill-opacity="0.01"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 1.16667C12.9428 1.16667 13.1667 1.39053 13.1667 1.66667V10.3333C13.1667 10.6095 12.9428 10.8333 12.6667 10.8333H6C5.72386 10.8333 5.5 10.6095 5.5 10.3333C5.5 10.0572 5.72386 9.83334 6 9.83334H12.1667V1.66667C12.1667 1.39053 12.3905 1.16667 12.6667 1.16667Z" fill="#CCCCCC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83331 7C2.83331 6.72386 3.05717 6.5 3.33331 6.5H9.99998C10.2761 6.5 10.5 6.72386 10.5 7C10.5 7.27614 10.2761 7.5 9.99998 7.5H3.83331V14.3333C3.83331 14.6095 3.60946 14.8333 3.33331 14.8333C3.05717 14.8333 2.83331 14.6095 2.83331 14.3333V7Z" fill="#CCCCCC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3131 1.31312C12.5084 1.11786 12.825 1.11786 13.0202 1.31312L15.0202 3.31312C15.2155 3.50838 15.2155 3.82496 15.0202 4.02023C14.825 4.21549 14.5084 4.21549 14.3131 4.02023L12.6667 2.37378L11.0202 4.02023C10.825 4.21549 10.5084 4.21549 10.3131 4.02023C10.1179 3.82496 10.1179 3.50838 10.3131 3.31312L12.3131 1.31312Z" fill="#CCCCCC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.97976 11.9798C1.17502 11.7845 1.4916 11.7845 1.68687 11.9798L3.33331 13.6262L4.97976 11.9798C5.17502 11.7845 5.4916 11.7845 5.68687 11.9798C5.88213 12.175 5.88213 12.4916 5.68687 12.6869L3.68687 14.6869C3.4916 14.8821 3.17502 14.8821 2.97976 14.6869L0.97976 12.6869C0.784497 12.4916 0.784497 12.175 0.97976 11.9798Z" fill="#CCCCCC"/>
        </svg>
        Сортировать
        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M22.0133 0H0.986694V16H22.0133V0Z" fill="var(--grey)" fill-opacity="0.01"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.8451 3.64645C9.10171 3.45118 9.51775 3.45118 9.77436 3.64645L15.031 7.64645C15.2876 7.84171 15.2876 8.15829 15.031 8.35355L9.77436 12.3536C9.51775 12.5488 9.10171 12.5488 8.8451 12.3536C8.5885 12.1583 8.5885 11.8417 8.8451 11.6464L13.6371 8L8.8451 4.35355C8.5885 4.15829 8.5885 3.84171 8.8451 3.64645Z" fill="var(--grey)"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="21.0266" height="16" fill="white" transform="translate(0.986694)"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <div class="catalog__head-sort filter" :class="{active: sortActive}">
      <span>
        <p>Сортировать:</p>
        <svg @click="sortActive = !sortActive" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 1.07024C17.3166 0.682175 16.6834 0.682175 16.2929 1.07024L9 8.31712L1.70711 1.07024C1.31658 0.682175 0.683418 0.682175 0.292892 1.07024C-0.0976315 1.4583 -0.0976315 2.08747 0.292892 2.47553L7.58579 9.72241L0.292892 16.9693C-0.0976315 17.3574 -0.0976315 17.9865 0.292892 18.3746C0.683418 18.7626 1.31658 18.7626 1.70711 18.3746L9 11.1277L16.2929 18.3746C16.6834 18.7626 17.3166 18.7626 17.7071 18.3746C18.0976 17.9865 18.0976 17.3574 17.7071 16.9693L10.4142 9.72241L17.7071 2.47553C18.0976 2.08747 18.0976 1.4583 17.7071 1.07024Z" fill="#CCCCCC"/>
        </svg>
      </span>
      <form class="sort__form">
        <div class="sort__form-group" v-for="(sorting, index) in getFilter.sorting.options" :key="index">
          <input type="radio" :id="sorting.slug+index" :checked="sorting.active" v-model="sorting.active" @change="sort(getFilter.sorting, sorting.slug), sortActive = !sortActive" name="sort">
          <label :for="sorting.slug+index" :class="{active: sorting.active}">{{ sorting.name }}</label>
        </div>
      </form>
    </div>
  </div>
  <div class="catalog__sidebar" :class="{active: filerActive}">
    <div class="sidebar__category">
      <div class="sidebar__category-title">
        <p>{{getFilter.categories.name}}</p>
      </div>
      <ul class="dropdown__catalog" v-if="getFilter.categories.parent">
        <li>
          <div class="target">
            <svg class="svg"  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7L4 4L1 1" stroke="#A2D397"/>
            </svg>
          </div>
          <a href="#!" :class="{active: getFilter.categories.parent.active}" @click.prevent="sort(getFilter.categories, getFilter.categories.parent.id)">
            <span>{{ getFilter.categories.parent.name }}</span>
          </a>
          <ul>
            <li v-for="(cat, index) in getFilter.categories.children" :key="index">
              <a href="#!" :class="{active: cat.active}" @click.prevent="sort(getFilter.categories, cat.id)">
                <span>{{ cat.name }}</span>
              </a>
              <div v-if="cat.has_children" class="target">
                <svg class="svg"  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7L4 4L1 1" stroke="#A2D397"/>
                </svg>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="dropdown__catalog" v-else>
        <li v-for="(cat, index) in getFilter.categories.children" :key="index" >
          <a href="#!" :class="{active: cat.active}" @click.prevent="sort(getFilter.categories, cat.id)">
            <span>{{ cat.name }}</span>
          </a>
          <div class="target next">
            <svg v-if="cat.has_children" class="svg" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7L4 4L1 1" stroke="#A2D397"/>
            </svg>
          </div>
        </li>
      </ul>
    </div>
    <div class="sidebar__filter" >
      <div class="catalog__sidebar-title">
        <p>Фильтры:</p>
        <span>Сбросить все</span>
        <svg @click="filerActive = !filerActive" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 1.07024C17.3166 0.682175 16.6834 0.682175 16.2929 1.07024L9 8.31712L1.70711 1.07024C1.31658 0.682175 0.683418 0.682175 0.292892 1.07024C-0.0976315 1.4583 -0.0976315 2.08747 0.292892 2.47553L7.58579 9.72241L0.292892 16.9693C-0.0976315 17.3574 -0.0976315 17.9865 0.292892 18.3746C0.683418 18.7626 1.31658 18.7626 1.70711 18.3746L9 11.1277L16.2929 18.3746C16.6834 18.7626 17.3166 18.7626 17.7071 18.3746C18.0976 17.9865 18.0976 17.3574 17.7071 16.9693L10.4142 9.72241L17.7071 2.47553C18.0976 2.08747 18.0976 1.4583 17.7071 1.07024Z" fill="#CCCCCC"/>
        </svg>
      </div>
      <div class="catalog__sidebar-filter">
        <form class="content__filter" v-for="(additional, index) in getFilter.additional" :key="index">
          <span>{{ additional.name }}</span>
          <div class="item__container price__container" v-if="additional.type === 'slider'">
            <div class="_item focus">
              <input type="number" v-maska="'###########################'" v-model="additional.value[0]" :id="`price_min${index}`" name="price_min" placeholder="От">
              <label :for="`price_min${index}`">От</label>
            </div>
            <div class="_item focus">
              <input type="number" v-maska="'###########################'" v-model="additional.value[1]" :id="`price_max${index}`" name="price_max" placeholder="До">
              <label :for="`price_max${index}`">До</label>
            </div>
            <Slider :min="additional.min" :max="additional.max" :tooltips="false" v-model="additional.value" @change="sort(additional, additional.value)" />
          </div>
          <div class="item__container toggle__container" v-if="additional.type === 'toggle'">
            <div class="_item">
              <input type="checkbox" :checked="additional.value[0]" @input="additional.value[0] === 1 ? additional.value[0] = 0 : additional.value[0] = 1" :id="`${additional.slug + index}`" @change="sort(additional, additional.value)">
              <label :for="`${additional.slug + index}`"></label>
            </div>
          </div>
          <div class="item__container color__container" v-if="additional.type === 'multi'">
            <div class="_item" :class="{color: additional.slug === 'color'}" v-for="(option, index) in additional.options" :key="index">
              <template v-if="option.value">
                <input type="checkbox" :id="`${option.slug}_${index}`" v-model="option.active" @change="sort(additional, additional)">
                <label :for="`${option.slug}_${index}`" :style="'background:' + option.value"></label>
              </template>
              <template v-else>
                <input type="checkbox" :id="`${option.slug}_${index}`" v-model="option.active" :name="option.slug" @change="sort(additional, additional)">
                <label :for="`${option.slug}_${index}`">{{ option.name }}</label>
              </template>
            </div>
          </div>
          <div class="item__container color__container" v-if="additional.type === 'single'">
            <div class="_item" v-for="(option, index) in additional.options" :key="index">
                <span v-if="option.value" :style="'background:' + option.value">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4091 0.389092C10.9961 -0.0673003 10.291 -0.102147 9.83466 0.310923L4.91323 4.76673L2.18392 2.17548C1.73732 1.75168 1.03173 1.77014 0.60811 2.21655C0.184492 2.66295 0.202763 3.36836 0.649173 3.79216L4.0788 7.04756C4.29447 7.2525 4.57023 7.35402 4.8458 7.35402C5.00063 7.35402 5.15527 7.32087 5.29899 7.25683C5.46568 7.21313 5.62466 7.12987 5.76141 7.00593L11.3308 1.96339C11.7874 1.55032 11.8222 0.845484 11.4091 0.389092Z" fill="white"/>
                  </svg>
                </span>
              <template v-else>
                <input type="radio" :id="`${option.slug}_${index}`" @change="sort(additional, option.id)" name="material">
                <label :for="`${option.slug}_${index}`">{{ option.name }}</label>
              </template>
            </div>
          </div>
        </form>
        <form class="content__filter" v-for="(filter, index) in getFilter.attributes" :key="index" >
          <span>{{ filter.name }}</span>
          <div class="item__container price__container" v-if="filter.type === 'slider'">
            <div class="_item focus">
              <input type="number" v-maska="'###########################'" v-model="filter.value[0]" :id="`${filter.slug}_min${index}`" name="price_min" placeholder="От">
              <label :for="`${filter.slug}_min${index}`">От</label>
            </div>
            <div class="_item focus">
              <input type="number" v-maska="'###########################'" v-model="filter.value[1]" :id="`${filter.slug}_max${index}`" name="price_max" placeholder="До">
              <label :for="`${filter.slug}_max${index}`">До</label>
            </div>
            <Slider :min="filter.min" :max="filter.max" :tooltips="false" v-model="filter.value" @change="sort(filter, filter.value)" />
          </div>
          <div class="item__container toggle__container" v-if="filter.type === 'toggle'">
            <div class="_item">
              <input type="checkbox" :checked="filter.value[0]" @input="filter.value[0] === 1 ? filter.value[0] = 0 : filter.value[0] = 1" :id="`${filter.slug + index}`" @change="sort(filter, filter.value)">
              <label :for="`${filter.slug + index}`"></label>
            </div>
          </div>
          <div class="item__container color__container" v-if="filter.type === 'multi'">
            <div class="_item" :class="{color: filter.slug === 'color'}" v-for="(option, index) in filter.options" :key="index">
              <template v-if="option.value">
                <input type="checkbox" :id="`${option.slug}_${index}`" v-model="option.active" @change="sort(filter, filter)">
                <label :for="`${option.slug}_${index}`" :style="'background:' + option.value"></label>
              </template>

              <template v-else>
                <input type="checkbox" :id="`${option.slug}_${index}`" v-model="option.active" :name="option.slug" @change="sort(filter, filter)">
                <label :for="`${option.slug}_${index}`">{{ option.name }}</label>
              </template>
            </div>
          </div>
          <div class="item__container color__container"  v-if="filter.type === 'single'">
            <div class="_item" v-for="(option, index) in filter.options" :key="index">
              <span v-if="option.value" :style="'background:' + option.value">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4091 0.389092C10.9961 -0.0673003 10.291 -0.102147 9.83466 0.310923L4.91323 4.76673L2.18392 2.17548C1.73732 1.75168 1.03173 1.77014 0.60811 2.21655C0.184492 2.66295 0.202763 3.36836 0.649173 3.79216L4.0788 7.04756C4.29447 7.2525 4.57023 7.35402 4.8458 7.35402C5.00063 7.35402 5.15527 7.32087 5.29899 7.25683C5.46568 7.21313 5.62466 7.12987 5.76141 7.00593L11.3308 1.96339C11.7874 1.55032 11.8222 0.845484 11.4091 0.389092Z" fill="white"/>
                </svg>
              </span>
              <template v-else>
                <input type="radio" :id="`${option.slug}_${index}`" @change="sort(filter, option.id)" name="material">
                <label :for="`${option.slug}_${index}`">{{ option.name }}</label>
              </template>
            </div>
          </div>
        </form>
      </div>
      <div class="btn__green" :class="{filter: filerActive, sort: sortActive}">
        <a href="#!">Показать результат</a>
      </div>
    </div>

  </div>

</template>

<script>
import Slider from '@vueform/slider'
export default {
  name: 'Catalog-Sidebar',
  data() {
    return {
      value: [0,10000],
      select_filter: new Map(),
      filerActive: false,
      sortActive: false,
    }
  },
  methods:{
    sort(e, id){
      let array = {}
      if (e.type === 'slider') this.select_filter.set(e.slug, encodeURIComponent(`${id[0]};${id[1]}`))
      if (e.type === 'single') this.select_filter.set(e.slug, id)
      if (e.type === 'toggle') this.select_filter.set(e.slug, id[0])
      if (e.type === 'multi'){
        let idText = [];
        let newArray = id.options.filter(element => {
          if (element.active) return element
        })
        if (newArray.length) newArray.map(el=>{ idText.push(el.id); this.select_filter.set(e.slug, encodeURIComponent(idText.toString()))})
        else this.select_filter.delete(e.slug)
      }
      for (let [key, value] of this.select_filter.entries()) {
        array[key] = value
      }
      console.log(this.select_filter)
      console.table(e.options)
      history.replaceState(null, null, "?"+this.serialize(array));
    },
    serialize(obj) {
      let str = [];
      for (let p in obj) str.push(encodeURIComponent(p) + "=" + obj[p]);
      return str.join("&");
    }
  },
  watch: {
    filerActive(newValue) {
      if (window.innerWidth < 991.98){
        if (newValue){
          document.querySelector('body').style.overflow = 'hidden'
        }else {
          document.querySelector('body').style.overflow = 'unset'
        }
      }
    },
    sortActive(newValue) {
      if (window.innerWidth < 991.98){
        if (newValue){
          document.querySelector('body').style.overflow = 'hidden'
        }else {
          document.querySelector('body').style.overflow = 'unset'
        }
      }
    }
  },
  computed:{
    getFilter(){
      return this.$store.getters.getFilter
    }
  },
  components: { Slider },

}
</script>

<style src="@vueform/slider/themes/default.css"></style>