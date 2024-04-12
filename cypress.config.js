const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://homol.app.sulmed.startaideia.dev/',
  },
  fixturesFolder: false,
  video: false,
  viewportWidth: 1920,  // Largura da viewport
  viewportHeight: 1080, // Altura da viewport
})
