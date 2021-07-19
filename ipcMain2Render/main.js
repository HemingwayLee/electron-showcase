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

  mainWindow.webContents.once('dom-ready', () => {
    console.log("send!!!!")
    console.log("this will print on terminal console")
    mainWindow.webContents.send('ping-from-main', 'oops!')

    mainWindow.webContents.send('ping-with-multiple-arg', 3, 4, 5)
  })
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

