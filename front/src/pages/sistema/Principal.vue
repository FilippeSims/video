<template class="testea2">
  <q-page padding style="background: #f5f5f5;">
    <q-banner inline-actions rounded class="bg-green text-white q-mb-md" v-if="boasVindas === true">
      Olá, seja bem vindo!
      <template v-slot:action>
         <q-btn round dense flat font-size="10px" icon="close" @click.prevent="boasVindas = false" />
      </template>
    </q-banner>
    <h5 class="titulo-pages">Cursos disponíveis</h5>
    <hr>
    <div class="row items-start q-gutter-md q-mb-lg">
        <q-card class="my-card" v-for="n in 6" :key="`xs-${n}`" flat to="/video">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
          <q-card-actions align="right">
            <q-btn flat to="/curso">Ver Detalhes</q-btn>
          </q-card-actions>
        </q-card>
    </div>

    <h5 class="titulo-pages">Meus Cursos</h5>
    <hr>
    <div class="row items-start q-gutter-md">
        <q-card class="my-card" v-for="n in 4" :key="`xs-${n}`" flat>
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
            <q-card-actions align="right">
              <q-btn flat to="/curso">Ver Detalhes</q-btn>
            </q-card-actions>
        </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      boasVindas: true,
      value: 71
    }
  }
}
</script>
