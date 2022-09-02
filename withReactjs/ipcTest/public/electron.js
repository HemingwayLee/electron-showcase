const axios = require('axios')
const {app, BrowserWindow, ipcMain} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  })

  mainWindow.webContents.openDevTools();

  if (isDev) {
    mainWindow.loadURL('http://127.0.0.1:3000/')
  } else {
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('async-streaming-func', (event, arg) => {
  let result = ''
  
  axios.get(arg)
    .then(function (response) {
      const dom = new JSDOM(response.data);

      const scriptTag = dom.window.document.querySelectorAll("script");
      console.log(scriptTag.length)
      var scriptArray = [...scriptTag]; // converts NodeList to Array
      scriptArray.forEach((ele, idx) => {
        if (ele.textContent.includes('m3u8')) {
          const code = new Function(ele.textContent + "; return player_aaaa;");
          result = code()["url"]
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      event.sender.send('async-streaming-callback', result)
    });
})


