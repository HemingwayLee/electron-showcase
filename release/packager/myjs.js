
const fs = require('fs')
const app = require('electron')
const path = require('path')

let idx = 0

function addEntry(name, email) {
  if (name && email) {
    idx++
    let updateString = '<tr><td>'+ idx + '</td><td>'+ name +'</td><td>' 
      + email +'</td></tr>'
    $('#mytable > tbody').append(updateString)
  }
}

function loadAndDisplayContacts() { 
  // enableRemoteModule need to be `true` in `main.js`
  const filename = path.join(app.remote.app.getAppPath(), 'contacts.csv')

  console.log(`load ${filename}`)

  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf8').split('\n')
    
    data.forEach((contact, index) => {
      let [ name, email ] = contact.split(',')
      addEntry(name, email)
    })
  
  } else {
    console.log("File Doesn\'t Exist. Creating new file.")
  }
}

loadAndDisplayContacts()
