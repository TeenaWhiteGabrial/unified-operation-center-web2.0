module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/first-attribute-linebreak': [2, {//规定 Vue.js 组件中第一个属性是否需要换行，数字2，错误等级2。不满足时eslint会报错
      "singleline": 'beside',//单行时，表示第一个属性与标签名称在同一行
      "multiline": 'below',//多行时，表示第一个属性需要换行并与下一行的属性对齐。
    }],
    "vue/max-attributes-per-line": [2, {//限制在 HTML 模板中每个标签上属性的最大数量和每行属性的数量
      "singleline": 10,//如果是单行，最多放置10个属性，如果属性数量超过了这个值，就需要每个属性单独放在一行上
      "multiline": {
        "max": 1//如果是多行，每行最多放置一个属性
      }
    }],
    "vue/singleline-html-element-content-newline": "off",//当该规则被启用时，如果单行元素的内容过长，ESLINT规定必须进行换行。
    "vue/multiline-html-element-content-newline": "off",//当该规则被启用时，多行元素的内容必须换行
    "vue/name-property-casing": ["error", "PascalCase"],//组件的名称属性必须采用PascalCase（即每个单词的首字母都大写，例如MyComponent），如果名称属性不符合这个规范，就会被视为一个错误（error）。
    
    "vue/no-v-html": "off",//禁止在 Vue.js 模板中使用 v-html 指令来动态渲染 HTML 代码，以避免潜在的 XSS 攻击风险。
    'accessor-pairs': 2,//getter和setter方法须成对出现
    'arrow-spacing': [2, {//检查箭头函数的参数和箭头之间的空格是否符合要求
      'before': true,//箭头函数参数和箭头之间必须有空格
      'after': true//在箭头和函数体之间必须有空格
    }],
    'block-spacing': [2, 'always'],//代码块周围必须有空格
    'brace-style': [2, '1tbs', {//代码块的开始处放置左括号，结束处放置右括号，并在同一行上放置控制语句。
      'allowSingleLine': true //表示允许在同一行上编写单行代码块。
    }],
    'camelcase': [0, {// 不必须使用camelCase规则，每个单词的第一个字母都小写，而后续单词的第一个字母都大写
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], // 禁止在数组、对象的最后一个元素后使用结尾逗号
    'comma-spacing': [2, {//逗号前后的空格使用约定
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],//逗号必须放在当前行的末尾（'last'）
    'constructor-super': 2,//如果一个类是另一个类的派生类，那么它的构造函数必须使用super()方法调用其父类的构造函数
    'curly': [2, 'multi-line'],//强制执行在代码块周围使用花括号，即使它们只有一条语句。
    'dot-location': [2, 'property'],//属性访问符号.在属性名后面，即点号应该在同一行，而不是下一行。
    'eol-last': 2,//要求文件末尾有一个换行符。
    'eqeqeq': ["error", "always", {"null": "ignore"}],//使用严格运算符 === 和 !==。在比较null时，使用宽松相等运算符是可以接受的
    'generator-star-spacing': [2, {//指定了生成器函数 * 号前后的间距。before 和 after 属性都设置为 true，表示在 * 号前后都需要空格。
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],//处理回调函数时，将错误对象作为回调函数的第一个参数传递，并显式处理这些错误。
    'indent': [2, 2, {//第一个参数 2 指定了缩进的空格数为两个。第二个参数 2 指定了每个缩进级别的空格数为两个。
      'SwitchCase': 1//第三个参数 {'SwitchCase': 1} 指定了在 switch 语句中，case 子句相对于 switch 关键字缩进一层，同时 break 语句相对于 case 子句缩进一层。
    }],
    'jsx-quotes': [2, 'prefer-single'],//表示应该使用单引号来定义 JSX 属性的值
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']
  }
}
