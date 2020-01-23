<template class="testea2">
    <q-page padding style="background: #f5f5f5;">
        <q-banner inline-actions rounded class="bg-green text-white q-mb-md" v-if="boasVindas === true">
            Olá, seja bem vindo!
        <template v-slot:action>
            <q-btn round dense flat font-size="10px" icon="close" @click.prevent="boasVindas = false" />
        </template>
        </q-banner>
        <h5 class="titulo-pages">Título do curso</h5>
        <hr>
        <div class="row items-start">
            <div class="titulo-modulo" @click="modulo1 = !modulo1">
                <p>Modulo 1</p>
                <q-btn class="btn-a-f" round dense flat icon="add_circle" color="white" @click.prevent="boasVindas = false" v-if="modulo1 === false"/>
                <q-btn class="btn-a-f" round dense flat icon="do_not_disturb_on" color="white" @click.prevent="boasVindas = false" v-if="modulo1 === true"/>
            </div>
            <div class="eps-modulo" v-if="modulo1 === true">
                <div class="titulo-ep" v-for="n in 6" :key="`xs-${n}`">
                    <p>Titulo Episódio</p>
                </div>
            </div>
        </div>
        <div class="row items-start">
            <div class="titulo-modulo" @click="modulo2 = !modulo2">
                <p>Modulo 2</p>
                <q-btn class="btn-a-f" round dense flat icon="add_circle" color="white" @click.prevent="boasVindas = false" v-if="modulo2 === false"/>
                <q-btn class="btn-a-f" round dense flat icon="do_not_disturb_on" color="white" @click.prevent="boasVindas = false" v-if="modulo2 === true"/>
            </div>
            <div class="eps-modulo" v-if="modulo2 === true">
                <div class="titulo-ep" v-for="n in 6" :key="`xs-${n}`">
                    <p>Titulo Episódio</p>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      modulo1: false,
      modulo2: false,
      boasVindas: true
    }
  }
}
</script>
