<template>
    <q-page padding style="background: #f5f5f5;">
        <h5 class="titulo-pages">Contate-nos</h5>
        <hr>
            <q-input class="q-mb-md" v-model="ph" label="Assunto" placeholder="Digite..." hint="Qual assunto gostaria de tratar?" filled/>
            <q-input v-model="text" label="Texto" placeholder="Digite..." hint="O que deseja nos enviar?" filled type="textarea" />
            <q-btn color="primary" class="full-width q-mt-md" label="Enviar" to="#" unelevated/>
    </q-page>
</template>
