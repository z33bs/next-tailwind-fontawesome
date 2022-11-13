* nextjs No TS Yes ESLint
  * https://nextjs.org/docs
  * `npx create-next-app@latest` NB - will creat new dir
* Typescript checking (https://blog.jetbrains.com/webstorm/2019/09/using-typescript-to-check-your-javascript-code/_)
  * add tsconfig.js file in webstorm by New in the project folder, should be option for tsconfig.json with following:
  * add `"allowJs": true` to the default compiler options, finished file should look soemthing like this
  * add `"checkJs": true` also to ask compiler to check all files by default
    * otherwise add comment at top of file `// @ts-check`
  *  TypeScript will need to you install type definitions for the packages you use. They are available in the DefinitelyTyped repo and available on npm under the @types scope. E.g. for React, you need to run npm install --save-dev @types/react.
```json
{
"compilerOptions": {
"module": "commonjs",
"target": "es5",
"sourceMap": true,
"allowJs": true
},
"exclude": [
"node_modules"
]
}
```
* clean-up useless stuff from next starter proj
  * empty /styles/globals.css
  * delete Home.module.css
  * can delete the hello.js api
  * barebones index.js needed / you will replace this
  * replace favicon
  * 
* tailwind
* fontawesome
* --later supabase
* 