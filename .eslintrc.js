module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  plugins: ['prettier', 'vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 定义变量未使用报错，以阻止提交
    'no-unused-vars': 2,
    // Vue 风格
    // 指令缩写
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    // 组件/实例的选项的顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'onLoad',
          'onReady',
          'onShow',
          'onHide',
          'onUnload',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    // 元素/组件特性，属性的顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // e.g. 'is', 'v-is'
          'LIST_RENDERING', // e.g. 'v-for item in items'
          'CONDITIONALS', // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'RENDER_MODIFIERS', // e.g. 'v-once', 'v-pre'
          'GLOBAL', // e.g. 'id'
          'UNIQUE', // e.g. 'ref', 'key'
          'SLOT', // e.g. 'v-slot', 'slot'.
          'TWO_WAY_BINDING', // e.g. 'v-model'
          'OTHER_DIRECTIVES', // e.g. 'v-custom-directive'
          'OTHER_ATTR', // e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
          'EVENTS', // e.g. '@click="functionCall"', 'v-on="event"'
          'CONTENT' // e.g. 'v-text', 'v-html'
        ]
      }
    ]
  }
}
