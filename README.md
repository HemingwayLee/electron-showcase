# electron-showcase
![architecture](https://insujang.github.io/assets/images/191110/electron-architecture.png)

* Electron uses `Chromium` and `Node.js` to package codes into an app for Windows, Linux, and macOS
* Electron uses 2 different types of processes:
  * `Main process`: runs main script that displays a GUI by creating web pages
  * `Renderer process`: each web page that is created by the main script is rendered by a renderer process

## Chromium
* It is an open-source browser project that forms the basis for the Chrome web browser
* Google adds a number of closed-source features to the Chrome browser that Chromium lacks
  * AAC, H.264, and MP3 Support
  * Google Update
  * Extension Restrictions

