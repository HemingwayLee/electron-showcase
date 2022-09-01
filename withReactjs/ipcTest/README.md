# How
* Stay version `4.0.3` to avoid webpack v5 problem
* `npm install react-app-rewired --save-dev` 
* Add config-overrides.js
```javascript
module.exports = function override (config, env) {
  config.target = 'electron-renderer'
  return config;
}
```

* Add 
```javascript
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false
},
```

# Note

