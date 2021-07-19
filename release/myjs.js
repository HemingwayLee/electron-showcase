
const fs = require('fs')
const filename = 'contacts.csv'
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
