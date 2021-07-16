# What 
* we need to add `'unsafe-eval'` and `'unsafe-inline'` to CSP in `index.html`, even official quick start example has this issue

* we can use `mainWindow.webContents.openDevTools()` to see error logs

* we need `nodeIntegration` and `contextIsolation` to use `require` in `workaround.js`
```javascript
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
}
```

# How

```
npm install
npm start
```


