import { appTitle } from '@/helpers'

export const allRoutes = [
  {
    path: '/',
    name: 'preview',
    meta: {
      title: appTitle,
    },
    component: () => import('@/views/demos/index-3/index.vue'),
  },
  {
    path: '/demos',
    children: [
      {
        path: 'index-3',
        name: 'demos.index-3',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-3/index.vue'),
      },
    ],
  },
]
