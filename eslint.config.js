import js from '@eslint/js'
import globals from 'globals'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
  {
    plugins: { stylistic },
    rules: {
      'stylistic/indent': ['error', 2],
      'stylistic/semi': ['error', 'never'],
      'stylistic/quotes': ['error', 'single']
    }
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          experimentalDecorators: true
        }
      }
    }
  },
  [
    { 
      files: ['**/*.{js,mjs,cjs}'], 
      plugins: { js }, 
      extends: ['js/recommended'], 
      languageOptions: { 
        globals: {...globals.browser, ...globals.node},
        parser: '@babel/eslint-parser',
        parserOptions: {
          requireConfigFile: false,
          babelOptions: {
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      } 
    },
    { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
    { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended'] },
    { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: ['json/recommended'] },
    { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },
    { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
  ])
