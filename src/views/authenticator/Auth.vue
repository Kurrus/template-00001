<template>
  <div class="auth">
    <div class="auth__bg"></div>
    <div class="auth__container">
      <div class="auth__body">
        <AuthStep1 @emits="submit" v-if="step === 1"/>
        <AuthStep2 @step="step = 1" @emits="submit" v-if="step === 2 && formData.phone_number" :num="formData.phone_number"/>
        <AuthStep3 @step="step = 1" @register="submitHandler" v-if="step === 3"/>
        <div v-if="step === 4">
          {{formData}}
        </div>
      </div>
      <div class="auth__lang">
        <a href="#!" class="active">Русский</a> |
        <a href="#!">Uzbekcha</a> |
        <a href="#!">English</a>
      </div>
    </div>
  </div>
</template>

<script>
import AuthStep1 from "@/components/auth/AuthStep1";
import AuthStep2 from "@/components/auth/AuthStep2";
import AuthStep3 from "@/components/auth/AuthStep3";

export default {
  name: 'Auth',
  data() {
    return {
      step: 1,
      formData:{
        phone_number: null,
        first_name: null,
        last_name: null,
        code: null,
        region: null,
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('login', '/oauth/auth?client_id=dev')
  },
  methods: {
    async submit(e) {
      if (e.phone_number){
        this.formData.phone_number = e.phone_number;
        await this.$store.dispatch('login', { phone_number: this.formData.phone_number })
      }
      if (e.code){
        this.formData.code = e.code
      }
      this.step++;
    },
    submitHandler(e){
      if (e.first_name && e.last_name  && e.region ){
        this.formData.first_name = e.first_name;
        this.formData.last_name = e.last_name;
        this.formData.region = e.region;
      }
      console.log(this.formData)
    }

  },
  components:{
    AuthStep1,
    AuthStep2,
    AuthStep3
  }
}
</script>
