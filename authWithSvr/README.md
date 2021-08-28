# What 
* we need to add `'unsafe-eval'` and `'unsafe-inline'` to CSP in `index.html`, even official quick start example has this issue

* we can use `mainWindow.webContents.openDevTools()` to see error logs

* we need `nodeIntegration`, `contextIsolation`, and `enableRemoteModule` to use `require` and `require('electron').remote.session` in `workaround.js`
```javascript
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
  enableRemoteModule: true,
}
```


# How
* we need to setup another django server `django-cheatsheet/auth/csrfTests` for testing

```
npm install
npm start
```


