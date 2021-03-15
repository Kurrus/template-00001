<template>
  <div>
    <h2>Select</h2>
    <Select
        :options="select"
        :value="select_value"
        :optionId="'id'"
        :optionValue="'title'"
        id="select"
        @change="e => select_value = e"
        :class="{
           invalid: select_value === ''
        }"
    />
    <label for="select" class="label" v-if="select" :class="{focus: !(select_value === '')}">Выберите</label>
    <small
        class="error"
        v-if="select_value === ''"
    >Выберите проект</small>
  </div>
</template>

<script>

import Select from "@/components/ui/Select";


export default {
  data() {
    return {
      select_value: {
        id: null,
        title: '',
      },
      select: [
        {id: 1, title: 'Сматрфоны и телефны'},
        {id: 2, title: 'Техника для кухни'},
        {id: 3, title: 'Быт. техника'},
        {id: 4, title: 'Электроника'},
        {id: 5, title: 'Мебель'},
        {id: 6, title: 'Для сада'},
      ]
    }
  },
  components: {
    Select
  }
}
</script>

<style scoped>

</style>