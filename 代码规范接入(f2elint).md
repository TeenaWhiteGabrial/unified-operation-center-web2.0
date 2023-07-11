# 代码规范接入（f2elint）

## 接入流程

1. `npx f2elint init`  在项目中接入 f2elint，根据项目的需要选择相应配置，此步骤会自动删除`package.json`文件中`eslint,stylelint`等各种 lint 依赖项
2. 根据项目的需要，可以手动修改 lint 规则，如`.editorconfig .prettierrc.js .eslintrc.js stylelint.config.js`等配置文件
3. 根据`.vscode/extensions.json`文件的配置安装插件，如：`eslint` 、`stylelint` 、`prettier`
4. 项目 package.js 文件中的 lint 可以删除掉（如果存在）
5. npx f2elint -h 获取 f2elint 命令

## 如何使用

1. 代码风格规范化，如空格、换行等
   - `编辑器内右键-格式化`
   - `保存时自动格式化`
2. 代码质量规范化，如禁止未被使用的变量

   自动修复：`npm run f2elint-fix`

3. 代码提交规范化，如不合格的代码质量不允许提交。使用 ali 通用规约，具体规则：[https://www.npmjs.com/package/commitlint-config-ali?activeTab=code](https://www.npmjs.com/package/commitlint-config-ali?activeTab=code)
4. commit 消息基础，名词解释：

   ```jsx
   //以下是一段commit消息
   feat(user-profile): Add user authentication feature  //这是标题，header

   This commit adds a new feature for user authentication. //这是正文，body

   Closes #123 //这是页脚，footer
   See also: https://github.com/example/repo/issues/123

   // user-profile，涉及标识，scope
   // feat，变更类型，type
   // Add user authentication feature，主题，subject，描述部分。
   ```

5. 摘抄并解释 ali 规约 commit 部分：

   ```jsx
   'body-leading-blank': [1, 'always']: 要求提交信息的正文（body）前面必须有一个空行。
   'body-max-line-length': [2, 'always', 100]: 要求提交信息的正文每一行的长度不能超过100个字符。
   'footer-leading-blank': [1, 'always']: 要求提交信息的页脚（footer）前面必须有一个空行。
   'footer-max-line-length': [2, 'always', 100]: 要求提交信息的页脚每一行的长度不能超过100个字符。
   'header-max-length': [2, 'always', 100]: 要求提交信息的标题（header）长度不能超过100个字符。
   'scope-case': [2, 'always', 'lower-case']: 要求提交信息的作用域（scope）必须使用小写字母。
   'subject-case': [0]: 不对提交信息的主题（subject）的大小写做强制要求。
   'subject-empty': [2, 'never']: 要求提交信息的主题不能为空。
   'subject-full-stop': [2, 'never', '.']: 要求提交信息的主题末尾不能有句号。
   'type-case': [2, 'always', 'lower-case']: 要求提交信息的类型（type）必须使用小写字母。
   'type-empty': [2, 'never']: 要求提交信息的类型不能为空。
   'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']]: 要求提交信息的类型必须是预定义的几种类型之一，包括 'feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert'。
   ```

## 问题解决

1，”\***\*Cannot read property ‘version‘ of undefined”\*\***

```jsx
原因：f2elint接入时卸载了eslint，找不到eslint的依赖库。
解决方案：重新安装eslint 和 eslint-plugin-vue
```
