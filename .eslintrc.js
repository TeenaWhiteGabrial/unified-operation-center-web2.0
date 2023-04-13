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
    'vue/multi-word-component-names': 'off',
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
      'SwitchCase': 1//指定了在 switch 语句中，case 子句相对于 switch 关键字缩进一层，同时 break 语句相对于 case 子句缩进一层。
    }],
    'jsx-quotes': [2, 'prefer-single'],//表示应该使用单引号来定义 JSX 属性的值
    'key-spacing': [2, {//用于强制对象字面量中键值对的间距一致，冒号之前不需要空格，冒号之后需要一个空格
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {//用于强制关键字（例如 if、else、for、while、function 等）前后的空格。
      'before': true,
      'after': true
    }],
    'new-cap': [2, {//用于强制要求构造函数首字母大写。
      'newIsCap': true, //使用 new 关键字创建对象时构造函数必须首字母大写
      'capIsNew': false //首字母大写的函数可以不使用 new 关键字调用
    }],
    'new-parens': 2,//规则强制要求在调用构造函数时使用括号，例如 new MyObject()。如果没有使用括号，会被视为错误。
    'no-array-constructor': 2,//规则禁止使用 Array 构造函数创建数组，例如 new Array()。应该使用字面量形式创建数组，例如 []。
    'no-caller': 2,//规则禁止使用 arguments.caller 和 arguments.callee，这两个属性已经被废弃。
    'no-console': 'off',//规则禁止使用 console 对象，但这里的配置将其禁用，即不会产生错误或警告提示。
    'no-class-assign': 2,//规则禁止给类赋值，例如 MyClass = function() {}。类只能作为静态定义，不应该被赋值。
    'no-cond-assign': 2,//规则禁止在条件语句中使用赋值操作符，例如 if (x = 1) { }。这种写法容易引起混淆，应该避免使用。
    'no-const-assign': 2,//规则禁止给const 常量赋值的操作。
    'no-control-regex': 0,//规则允许在正则表达式中使用控制字符
    'no-delete-var': 2,//规则禁止使用 delete 操作符删除变量
    'no-dupe-args': 2,//规则禁止在函数定义中重复使用参数名称，例如 function myFunc(a, b, a) { }
    'no-dupe-class-members': 2,//则禁止在类定义中重复使用成员名称，例如 class MyClass { myMethod() { } myMethod() { } }。
    'no-dupe-keys': 2,//规则禁止在对象字面量中使用重复的键，例如 { x: 1, x: 2 }。
    'no-duplicate-case': 2,//规则禁止在 switch 语句中使用重复的 case 标签，例如 `switch (x) { case 1: ... case 1: }
    'no-empty-character-class': 2,//规则禁止在正则表达式中使用空字符集，例如 /[]/。
    'no-empty-pattern': 2,// 规则禁止在解构赋值中使用空模式，例如 const {} = obj;
    'no-eval': 2,// 禁止使用 eval 函数,eval() 函数可以执行任意的 JavaScript 代码，因此可能会导致安全漏洞
    'no-ex-assign': 2,// 禁止在表达式中使用赋值语句 如if (a = 1) { }
    'no-extend-native': 2,// 禁止扩展内置对象的原型
    'no-extra-bind': 2,// 禁止不必要的绑定函数
    'no-extra-boolean-cast': 2,// 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'],// 规定在函数表达式和声明中，只在必要的情况下使用括号
    'no-fallthrough': 2, //禁止在 switch 语句中的 case 子句中出现穿透，即不允许在一个 case 子句中没有 break 或 return，而直接执行下一个 case 子句的代码
    'no-floating-decimal': 2,//禁止省略浮点数中的零，即不允许出现 ".5"，而是要写成 "0.5"
    'no-func-assign': 2,// 禁止重新分配函数声明，即不允许在已经声明的函数名称上进行赋值操作。
    'no-implied-eval': 2,//禁止使用隐式的 eval()，即不允许将字符串传递给 setTimeout()、setInterval() 或 execScript()，因为这可能会导致代码注入攻击。
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,//禁止在 RegExp 构造函数中使用无效的正则表达式，因为这可能会导致运行时错误。
    'no-irregular-whitespace': 2,//禁止在代码中使用不规则的空格，包括 Unicode 的非空格空白字符等
    'no-iterator': 2,// 禁止直接使用 iterator，因为它不是一个标准属性
    'no-label-var': 2,// 禁止在变量名和标签名相同的情况下使用标签，因为这可能会导致混淆
    'no-labels': [2, { //禁止使用标签语句
      'allowLoop': false, //循环中禁止
      'allowSwitch': false //switch中禁止
    }],
    'no-lone-blocks': 2,//禁止出现不必要的嵌套块，即不允许只包含一个语句的块
    'no-mixed-spaces-and-tabs': 2, //禁止使用空格和tab混合缩进，因为这可能会导致代码在不同的编辑器和浏览器中呈现不一致。
    'no-multi-spaces': 2, //禁止在代码中使用多个连续的空格
    'no-multi-str': 2, //禁止在字符串中使用多行字符串
    'no-multiple-empty-lines': [2, {// 禁止出现多个空行
      'max': 1
    }],
    'no-native-reassign': 2, //禁止重新分配本地对象或只读全局变量
    'no-negated-in-lhs': 2, //禁止在 in 表达式的左侧使用取反操作符，因为这可能会导致意外的行为
    'no-new-object': 2, //禁止使用 Object 构造函数创建对象
    'no-new-require': 2, //禁止在 require 函数中使用 new 操作符
    'no-new-symbol': 2, // 禁止使用 Symbol 构造函数创建符号
    'no-new-wrappers': 2, //禁止使用 String、Number 和 Boolean 构造函数创建字符串、数字和布尔值
    'no-obj-calls': 2, //禁止将全局对象作为函数调用。
    'no-octal': 2, // 禁止使用八进制数字
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止使用 __dirname 和 __filename 进行字符串连接来构造文件路径
    'no-proto': 2, // 禁止使用 proto 属性
    'no-redeclare': 2, //禁止重复声明变量
    'no-regex-spaces': 2,// 禁止在正则表达式中使用多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在 return 语句中使用赋值语句，除非用括号将赋值语句括起来
    'no-self-assign': 2, //禁止将变量赋值给它们自己
    'no-self-compare': 2, // 禁止将自己与自己进行比较
    'no-sequences': 2, // 禁止使用逗号操作符,因为它可以导致意外的行为
    'no-shadow-restricted-names': 2, //禁止在作用域中重新定义保留字，如 undefined、NaN、Infinity、eval、arguments 等
    'no-spaced-func': 2, //禁止在函数名和开括号之间有空格。
    'no-sparse-arrays': 2, // 禁止使用稀疏数组
    'no-this-before-super': 2, // 禁止在调用 super() 之前使用 this 或 super 关键字
    'no-throw-literal': 2, //禁止抛出字面量（如数字、字符串、布尔值）作为异常，而应该使用 Error 对象
    'no-trailing-spaces': 2,// 禁止在代码行的末尾使用空格
    'no-undef': 2, // 禁止使用未声明的变量
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 2, // 禁止出现意外的多行代码块，例如没有花括号包裹的 if 语句
    'no-unmodified-loop-condition': 2,// 禁止在循环中使用不变的条件，因为这可能会导致无限循环
    'no-unneeded-ternary': [2, { //禁止在不必要的情况下使用三元运算符，即可以使用更简单的方式来实现相同的结果。 
      'defaultAssignment': false
    }],
    'no-unreachable': 2,//禁止在代码中使用不可到达的代码，例如在 return语句后面编写代码，或在 throw 语句后面编写代码
    'no-unsafe-finally': 2,//禁止在 finally 代码块中使用控制流语句（如 return、throw、break 和 continue），因为这可能会导致意外的行为
    'no-unused-vars': [2, { //  禁止定义未使用的变量，'vars': 'all' 表示检查所有变量，'args': 'none' 表示不检查函数参数。
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,//禁止在不需要使用函数的情况下使用 call 或 apply 方法。
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性名。
    'no-useless-constructor': 2, // 禁止在类中定义不必要的构造函数，例如只调用 super() 的构造函数
    'no-useless-escape': 0, // 允许在字符串中使用不必要的转义符
    'no-whitespace-before-property': 2,// 禁止在属性访问表达式中的点前使用空格。
    'no-with': 2, // 禁止使用 with 语句，因为它会导致意外的行为。
    'one-var': [2, { // 强制将每个变量声明为单独的语句，而不是使用逗号将它们放在同一行中
      'initialized': 'never'// 表示在声明变量时不强制初始化变量。
    }],
    'operator-linebreak': [2, 'after', { // 强制在长表达式中的操作符之后进行换行
      'overrides': { // 表示在条件表达式中的 ? 和 : 操作符之前换行
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 不允许在代码块中使用额外的空行。
    'quotes': [2, 'single', { // 要求在字符串周围使用单引号 
      'avoidEscape': true, //表示如果字符串中包含了单引号，则可以使用双引号，反之亦然
      'allowTemplateLiterals': true //允许使用 ES6 模板字符串
    }],
    'semi': [2, 'never'], //禁止在语句末尾使用分号
    'semi-spacing': [2, { // 强制分号前后的间距
      'before': false, // 禁止在分号前有空格
      'after': true // 要求在分号后有空格
    }],
    'space-before-blocks': [2, 'always'], //要求在代码块前使用空格
    'space-before-function-paren': [2, 'never'], //要求禁止在函数括号内使用空格
    'space-in-parens': [2, 'never'], // 要求在括号内不使用空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, { // 要求在一元操作符前或后使用一致的空格
      'words': true, //单词类一元操作符（如 typeof、void、delete）前后
      'nonwords': false //其他类型的一元操作符（如 -、+、--、++ 等）
    }],
    'spaced-comment': [0, 'always', { //不要求在注释前使用一致的空格
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] //定义了应在其前后使用空格的注释标记
    }],
    'template-curly-spacing': [2, 'never'],//要求模板字符串中的大括号内不使用空格
    'use-isnan': 2, //要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, //  强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求立即调用的函数表达式（IIFE）使用括号括起来
    'yield-star-spacing': [2, 'both'], //要求在 yield* 表达式中 * 周围使用空格
    'yoda': [2, 'never'],//要求不使用 "Yoda" 条件语句
    'prefer-const': 2, //如果一个变量不会被重新分配，则要求使用 const 声明它
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //  禁止在生产环境中使用 debugger 语句。根据环境变量 process.env.NODE_ENV 的值来确定是否禁止使用 debugger
    'object-curly-spacing': [2, 'always', { //强制在大括号中使用一致的空格
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] //强制数组方括号中使用一致的空格。
  }
}
