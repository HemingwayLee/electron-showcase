# What 
* we need to add `'unsafe-eval'` and `'unsafe-inline'` to CSP in `index.html`, even official quick start example has this issue

* we can use `mainWindow.webContents.openDevTools()` to see error logs

* we need `nodeIntegration` and `contextIsolation` to use `require` in `myjs.js`
* enableRemoteModule need to be `true` in `main.js`
```javascript
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
  enableRemoteModule: true,
}
```

# How to run
```
npm install electron-builder --save-dev
npm install electron --save-dev
```

```
npm install
npm start
```

# How to release
```
npm run build
```

