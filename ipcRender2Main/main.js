const {app, BrowserWindow, ipcMain} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  mainWindow.loadFile('index.html')

  // Debug
  mainWindow.webContents.openDevTools()
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

ipcMain.on('async-msg', (event, arg) => {
  console.log(arg)
  event.sender.send('async-back', 'async pong')
})

ipcMain.on('sync-msg', (event, arg) => {
  console.log(arg) 
  event.returnValue = 'sync pong'
})
