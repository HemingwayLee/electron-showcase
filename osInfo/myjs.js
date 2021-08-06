const username = require('username')
const getmac = require('getmac')

async function loadAndDisplay() { 
  // Not working on mac
  // const username = process.env.username || process.env.user
  // console.log(username)

  const user = await username()
  $('#myuser').text(user)

  const mac = getmac.default()
  $('#mymac').text(mac)
}

loadAndDisplay()
