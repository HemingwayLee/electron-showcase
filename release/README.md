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
npm install
npm start
npm install -g electron-packager
```

# How to release
```
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
```

* before we run `electron-packager`, we need to run `npm install` first
```
electron-packager . myrelease --platform=mas --arch=x64
```

* `contacts.csv` need to move to released folder manually

* [options](https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html)

# Note
* this does not work for electron app which uses `python-shell`

