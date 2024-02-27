import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Rocketgraph Documentation</span>,
  project: {
    link: 'https://github.com/RocketsGraphQL/rgraph',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/RocketsGraphQL/rgraph',
  footer: {
    text: 'Rocketgraph Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rocketgraph'
    }
  }
}

export default config
