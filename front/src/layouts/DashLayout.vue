<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-grey-9">
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="280"
        :breakpoint="400"
        content-class="bg-grey-9"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #444444">
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === ''" :to="menuItem.to" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" :color="menuItem.color" size="20px" />
              </q-item-section>
              <q-item-section class="letraMenu" :style="{ color: menuItem.color }">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
           <q-separator v-if="menuItem.separator" />
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" style="background: #333333; height: 150px;">
          <div class="bg-transparent">
            <div class="logo-system"></div>
            <div class="infos-system">
              <p>Olá, Filippe!</p>
            </div>
            <div class="infos-system">
              <p>10 cursos em andamento</p>
            </div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'home',
    color: 'white',
    label: 'Início',
    to: '/dashboard',
    separator: true,
    rule: 'guest'
  },
  {
    icon: 'people',
    color: 'white',
    label: 'Meu Perfil',
    to: '/1',
    separator: true,
    rule: 'guest'
  },
  {
    icon: 'school',
    color: 'white',
    label: 'Meus Cursos',
    to: '/1',
    separator: true,
    rule: 'guest'
  },
  {
    icon: 'mail',
    color: 'white',
    label: 'Contate-nos',
    to: '/1',
    separator: true,
    rule: 'guest'
  },
  {
    icon: 'mdi-logout',
    color: 'white',
    label: 'Sair',
    to: '/1',
    separator: true,
    rule: 'guest'
  }
]

export default {

  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>
