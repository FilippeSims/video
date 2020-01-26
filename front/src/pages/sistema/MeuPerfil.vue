<template>
    <q-page padding style="background: #f5f5f5;">
        <h5 class="titulo-pages">Meu Perfil</h5>
        <hr>
            <q-input class="q-mb-md" v-model="ph" label="Nome" placeholder="Digite..." hint="Seu nome" filled/>
            <q-input class="q-mb-md" v-model="ph" label="E-mail" placeholder="Digite..." hint="Seu e-mail" filled/>
            <q-input class="q-mb-md" v-model="ph" label="Senha nova" placeholder="Digite..." hint="Nova senha" filled/>
            <q-input class="q-mb-md" v-model="ph" label="Confirme senha nova" placeholder="Digite..." hint="Confirme a senha" filled/>
            <q-btn color="primary" class="full-width q-mt-md" label="Salvar Mudanças" to="#" unelevated/>
    </q-page>
</template>
