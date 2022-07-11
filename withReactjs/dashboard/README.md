# How
* prerequisite
```
npm install electron-builder --save-dev
npm install electron --save-dev
npm install concurrently --save-dev
npm install wait-on --save-dev
```

* how to run
```
npm install
npm run dev
```

* how to release
```
npm run build
open dist/
```

# What
* we create `start`, `react-build`, `electron`, ... so we can develop/test them seperately
```
"start": "react-scripts start",
"react-build": "react-scripts build",
"build": "npm:react-build && electron-builder",
"dev": "concurrently -k \"BROWSER=none npm start\" \"npm:electron\"",
"electron": "wait-on http://127.0.0.1:3000 && electron ."
```


