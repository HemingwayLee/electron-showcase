const {ipcRenderer} = require('electron');

console.log("load my.js");

function helloSend() {
  console.log(ipcRenderer.sendSync('sync-msg', 'sync ping from render'));

  ipcRenderer.on('async-back', (event, arg) => {
     console.log(arg);
  });

  ipcRenderer.send('async-msg', 'async ping from render');
}
