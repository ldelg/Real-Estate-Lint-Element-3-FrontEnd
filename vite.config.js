import litCss from 'vite-plugin-lit-css'
import babel from 'vite-plugin-babel'


export default ({ mode }) => ({
  base: mode === 'production' ? '/Real-Estate-Lint-Element-3-FrontEnd/' : '/',
  root: '.',
  plugins: [litCss(),
    babel({
      babelConfig: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { version: '2023-11' }],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-private-methods',
          '@babel/plugin-transform-class-static-block',
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
});