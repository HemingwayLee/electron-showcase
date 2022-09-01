const {app, BrowserWindow, ipcMain} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

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
  console.log("!!!");
  console.log(arg);
  event.sender.send('async-streaming-callback', 'async pong')
})


