const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

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

