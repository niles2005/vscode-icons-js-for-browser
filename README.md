# vscode-icons-js-for-browser
use vscode-icons in browser,depend on vscode-icons-js
(https://github.com/dderevjanik/vscode-icons-js/tree/master/src)
在浏览器中使用vscode插件vscode-icons，基于vscode-icons-js实现

I want use vscode-icons in browser,and study the vscode-icons-js-example，but it bundle with the react,and is not a pure javascript lib.
so i do some patch ,and build it as a pure js lib,also not need requirejs.
希望在浏览器中使用vscode-icons，学习了vscode-icons-js-example,其使用typescript,并其与react绑定，webpack打包后非一个纯的js包。
所以做了一些补丁，使之成为一个无依赖的js库，并且并不依赖requirejs。

## Install
npm install


## Build
npm run build

before build,you should install typescript first.
npm i -g typescript

usage:
<script src="vscode-icons-min.js"></script>

vscodeIcons.getIconForFile("a.txt")      ==>     file_type_text.svg

vscodeIcons.getIconForFolder("node_modules")   ==> folder_type_light_node.svg


you also can use it in nodejs

const vscodeIcons = require("./vscode-icons-min");

console.log(vscodeIcons.getIconForFile("a.txt"));

file_type_text.svg

console.log(vscodeIcons.getIconForFolder("node_modules"));

folder_type_light_node.svg


if you want svg files,you can download vscode-icons-js-example/docs/icons
(https://github.com/dderevjanik/vscode-icons-js-example)


you can see the example in test 

thanks for the vscode-icons's author:dderevjanik 
