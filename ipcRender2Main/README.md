# What 
* by default, we can not load resources from local
  * remove the following line from `index.html`, we can load resources from local
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
```
* we can use `mainWindow.webContents.openDevTools()` to see error logs

# How

```
npm install
npm start
```


