<template>
  <q-page class="bgLogin flex flex-center">
    <div class="box">
        <div class="logo"></div>
        <div class="opcoes q-mt-md">
          <div class="log" v-bind:style="{ background: activeColor,  color: inativeColor }" v-on:click="clickLogin()">
            <p>Login</p>
          </div>
          <div class="register" v-bind:style="{ background: inativeColor, color: activeColor }" v-on:click="clickRegistrar()">
            <p>Registrar</p>
          </div>
        </div>
        <div class="login" v-if="login === true && registrar === false">
            <q-input v-model="text" label="E-mail" filled/>
            <q-input class="q-mt-md" v-model="text" label="Senha" filled/>
            <q-btn color="primary" class="full-width q-mt-md" label="Entrar" unelevated/>
            <a href="#" class="q-mt-sm">Esqueci minha senha</a>
        </div>
        <div class="registrar" v-if="login === false && registrar === true">
            <q-input v-model="text" label="Nome completo" filled/>
            <q-input class="q-mt-md" v-model="text" label="E-mail" filled/>
            <q-input class="q-mt-md" v-model="text" label="Senha" filled/>
            <q-input class="q-mt-md" v-model="text" label="Confirme Senha" filled/>
            <q-btn color="primary" class="full-width q-mt-md" label="Registrar" unelevated/>
        </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      login: true,
      registrar: false,
      activeColor: '#FAFAFA',
      inativeColor: '#027BE3'
    }
  },
  methods: {
    clickLogin () {
      this.login = true
      this.registrar = false
      this.activeColor = '#FAFAFA'
      this.inativeColor = '#027BE3'
    },
    clickRegistrar () {
      this.login = false
      this.registrar = true
      this.activeColor = '#027BE3'
      this.inativeColor = '#FAFAFA'
    }
  }
}
</script>
