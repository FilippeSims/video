
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sistema/Principal.vue') }
    ]
  },
  {
    path: '/curso',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sistema/Curso.vue') }
    ]
  },
  {
    path: '/meu-perfil',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sistema/MeuPerfil.vue') }
    ]
  },
  {
    path: '/meus-cursos',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sistema/MeusCursos.vue') }
    ]
  },
  {
    path: '/contate-nos',
    component: () => import('layouts/DashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sistema/Contate-Nos.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
