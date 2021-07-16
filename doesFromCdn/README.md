# What 
* by default, it can not load resources from cdn
  * remove the following line from `index.html`, we can load resources from cdn
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
```
* we can use `mainWindow.webContents.openDevTools()` to see error logs

# How

```
npm install
npm start
```


