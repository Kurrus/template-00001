<template>
  <div class="auth__head">
    <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M27.5351 22.9728C24.3491 22.9728 21.6221 21.8666 19.3541 19.654C17.0861 17.4415 15.9521 14.7651 15.9521 11.6247C15.9521 8.48434 17.0861 5.79897 19.3541 3.5686C21.6221 1.33822 24.3491 0.223038 27.5351 0.223038C30.7211 0.223038 33.4481 1.33822 35.7161 3.5686C38.0021 5.79897 39.1452 8.48434 39.1452 11.6247C39.1452 14.7651 38.0021 17.4415 35.7161 19.654C33.4481 21.8666 30.7211 22.9728 27.5351 22.9728ZM27.5351 5.81681C25.9331 5.81681 24.5831 6.38779 23.4851 7.52974C22.3871 8.67169 21.8381 10.0367 21.8381 11.6247C21.8381 13.1949 22.3871 14.551 23.4851 15.6929C24.6011 16.817 25.9511 17.3791 27.5351 17.3791C29.1191 17.3791 30.4691 16.817 31.5851 15.6929C32.7011 14.551 33.2592 13.1949 33.2592 11.6247C33.2592 10.0367 32.7011 8.67169 31.5851 7.52974C30.4691 6.38779 29.1191 5.81681 27.5351 5.81681Z"
          fill="#676A6F"/>
      <path
          d="M78.0283 22.9728C74.8423 22.9728 72.1153 21.8666 69.8473 19.654C67.5793 17.4415 66.4453 14.7651 66.4453 11.6247C66.4453 8.48434 67.5793 5.79897 69.8473 3.5686C72.1153 1.33822 74.8423 0.223038 78.0283 0.223038C81.2143 0.223038 83.9413 1.33822 86.2093 3.5686C88.4953 5.79897 89.6383 8.48434 89.6383 11.6247C89.6383 14.7651 88.4953 17.4415 86.2093 19.654C83.9413 21.8666 81.2143 22.9728 78.0283 22.9728ZM78.0283 5.81681C76.4263 5.81681 75.0763 6.38779 73.9783 7.52974C72.8803 8.67169 72.3313 10.0367 72.3313 11.6247C72.3313 13.1949 72.8803 14.551 73.9783 15.6929C75.0943 16.817 76.4443 17.3791 78.0283 17.3791C79.6123 17.3791 80.9623 16.817 82.0783 15.6929C83.1943 14.551 83.7523 13.1949 83.7523 11.6247C83.7523 10.0367 83.1943 8.67169 82.0783 7.52974C80.9623 6.38779 79.6123 5.81681 78.0283 5.81681Z"
          fill="#676A6F"/>
      <path
          d="M11.61 22.9728C8.424 22.9728 5.688 21.8666 3.402 19.654C1.134 17.4415 0 14.7651 0 11.6247V0.223038C1.872 0.223038 3.321 0.731564 4.347 1.74861C5.373 2.76566 5.886 3.97899 5.886 5.38858V11.6247C5.886 13.1949 6.444 14.551 7.56 15.6929C8.676 16.817 10.026 17.3791 11.61 17.3791H13.689C15.057 17.3791 16.227 17.8608 17.199 18.8243C18.171 19.7879 18.657 21.1707 18.657 22.9728H11.61Z"
          fill="#676A6F"/>
      <path
          d="M59.3063 20.8584C57.3623 22.268 55.1393 22.9728 52.6373 22.9728C49.4513 22.9728 46.7153 21.8666 44.4293 19.654C42.1613 17.4415 41.0273 14.7651 41.0273 11.6247C41.0273 8.48434 42.1613 5.79897 44.4293 3.5686C46.7153 1.33822 49.4513 0.223038 52.6373 0.223038H59.6843C59.6843 2.02518 59.1983 3.40801 58.2263 4.37153C57.2543 5.33505 56.0843 5.81681 54.7163 5.81681H52.6373C51.0533 5.81681 49.7033 6.39671 48.5873 7.5565C47.4713 8.69845 46.9133 10.0545 46.9133 11.6247C46.9133 13.1949 47.4713 14.551 48.5873 15.6929C49.7033 16.817 51.0533 17.3791 52.6373 17.3791C54.2393 17.3791 55.5893 16.8081 56.6873 15.6661C57.7853 14.5242 58.3343 13.1592 58.3343 11.5712C58.3343 10.1616 58.8473 8.94826 59.8733 7.93121C60.8993 6.91416 62.3483 6.40563 64.2203 6.40563V22.9728C61.9523 22.9728 60.3143 22.268 59.3063 20.8584Z"
          fill="#676A6F"/>
    </svg>
    <p>Введите дополнительные данные для заполнения Вашего аккаунт</p>
  </div>
  <form class="auth__form">
    <div class="auth__group">
      <input
          type="text"
          id="first_name"
          placeholder="Ваше имя"
          v-model="first_name"
          :class="{focus: first_name !== ''}"
      >
      <label for="first_name">Ваше имя</label>
    </div>
    <div class="auth__group">
      <input
          type="text"
          id="last_name"
          placeholder="Ваша фамилия"
          v-model="last_name"
          :class="{focus: last_name !== ''}"
      >
      <label for="last_name">Ваша фамилия</label>
    </div>
    <div class="auth__group">
      <input
          type="text"
          id="region"
          placeholder="Ваша фамилия"
          v-model="region"
          autocomplete="off"
          :class="{focus: region !== ''}"
          @input="autocomplete(region)"
      >
      <label for="region">Ваше регион</label>
      <div class="complete" v-if="complete && res.length">
        <ul>
          <li v-for="(item, index) in resItems" :key="index" @click="region = res[index], complete = false">
            <div v-for="(val, index) in item" :key="index" :class="{ok: val.ok}">{{ val.val }}</div>
          </li>
        </ul>
      </div>
    </div>


    <div class="auth__group">
      <button type="submit" @click.prevent="submitHandler">Принять</button>
    </div>
  </form>
  <div class="auth__buttons">
    <button class="another__number" @click="$emit('step', 1)">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5465 22.1067L14.4398 16L20.5465 9.88L18.6665 8L10.6665 16L18.6665 24L20.5465 22.1067Z"
              fill="#4F4F4F"/>
      </svg>
      Ввести другой номер
    </button>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data() {
    return {
      first_name: '',
      last_name: '',
      region: '',
      items: [
        'Андижан',
        'Асака',
        'Джалакудук',
        'Карасу',
        'Кургантепа',
        'Мархамат',
        'Пайтуг',
        'Пахтаабад',
        'Ханабад',
        'Ходжаабад',
        'Шахрихан',
        'Бешкент',
        'Гузар',
      ],
      complete: false,
      res: null,
      resItems: null
    }
  },
  setup(_,{ emit }) {
    const submitHandler = () => {
      if (this.first_name === '' && this.last_name === '' && this.region === '') {
        return
      }
      let formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        region: this.region,
      }
      emit("register", formData);
    };

    return {
      submitHandler
    };
  },
  methods: {

    autocomplete(val) {
      let city = [];
      let items_array = [];
      if (val.length > 0) {
        this.complete = true
      } else {
        this.complete = false
      }
      for (let i = 0; i < this.items.length; i++) {
        let el = this.items[i]
        let itemsArray = el.toUpperCase().split('')
        let inputsArray = val.toUpperCase().split('')
        let j = 0;
        for (let k = 0; k < itemsArray.length; k++) {
          let elm = itemsArray[k]
          itemsArray[k] = {
            val: elm,
            ok: false
          }
          if (inputsArray[j] === elm && inputsArray.length > j) {
            j++;
            itemsArray[k].ok = true
          }

        }
        if (inputsArray.length === j) {
          city.push(this.items[i]);
          items_array.push(itemsArray)
        }
      }
      this.res = city
      this.resItems = items_array
    }
  },
}
</script>
