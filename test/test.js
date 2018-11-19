const vscodeIcons = require("./vscode-icons-min");

console.log("files...")
let files = ["a.js","a.exe","a.txt","a.jpg","a.json","a.html"];
files.forEach(file => {
    console.log(vscodeIcons.getIconForFile(file));
})

console.log("\r\nfolders...")
let folders = ["node_modules","build","src","dist","classes","temp"];
folders.forEach(folder => {
    console.log(vscodeIcons.getIconForFolder(folder));
})