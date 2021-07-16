// If you're in a Node/CommonJS + Browser environment (e.g. electron, node-webkit, etc..); 
//  the reason for this error is that jQuery's export logic first checks for module, not window
window.$ = window.jQuery = require('jquery');
