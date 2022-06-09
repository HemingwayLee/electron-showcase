const username = require('username')
const getmac = require('getmac')

function doSubmit(e) {
  e.preventDefault()

  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:8000/dosignin/",
    data: $(this).serialize(),
    success: function (data) {
      console.log(data)
      $('#message').text(`Success`)
    },
    error: function (xhr, textStatus, errorThrown) {
      $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`)
    },
  })
}


$('#loginform').submit(doSubmit)

async function loadAndDisplay() { 
  const user = await username()
  $('#myuser').text(user)

  const mac = getmac.default()
  $('#mymac').text(mac)
}

loadAndDisplay()
