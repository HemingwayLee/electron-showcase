const {ipcRenderer} = require('electron');

console.log("load my.js");

function hello() {
  console.log("hello!!!");
}

ipcRenderer.on('ping-from-main', (event, arg) => {
  console.log("receved!!!")
  console.log(arg);
});


ipcRenderer.on('ping-with-multiple-arg', (event, ...args) => {
  for (var i=0; i<args.length; i++) {
    console.log(args[i]);
  }
});
