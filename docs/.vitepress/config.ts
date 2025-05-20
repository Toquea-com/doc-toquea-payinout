import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi'
import spec from '../public/openapi.json' with { type: 'json' }

const sidebar = useSidebar({
  spec,
  // Optionally, you can specify a link prefix for all generated sidebar items.
  linkPrefix: '/operations/',
})

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'es-ES',
  title: 'Toquea',
  description: 'Documentación para los servicios de Toquea',

  head: [['link', { rel: 'icon', href: 'public/favicon.svg' }]],

  themeConfig: {
    nav: [{ text: 'API Reference', link: '/introduction' }],

    sidebar: [
      {
        text: 'Payout',
        items: [
          {text: 'Bienvenido', link: '/payout'},
          {text: 'Flujo', link: '/payout/flow' },
          {text: 'Diccionario de datos', link: '/payout/dictionary'}
        ]
      },
      {
        text: 'Operaciones',
        items: [
          ...sidebar.generateSidebarGroups(),
        ],
      },
      {
        text: 'One Page',
        items: [
          { text: 'One Page', link: '/one-page' },
          { text: 'Without Sidebar', link: '/without-sidebar' },
        ],
      },
    ],
  },
  base: '/doc-toquea-payinout/',
});
