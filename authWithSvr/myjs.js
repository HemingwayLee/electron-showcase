var session = require('electron').remote.session

function doSubmit(e) {
  e.preventDefault()

  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/code/?secret=ELECTRON_APP",
    success: function (data) {
      console.log(data['token'])  
      const cookie = { url: 'http://127.0.0.1:8000', name: 'csrftoken', value: data['token'] }
      session.defaultSession.cookies.set(cookie, (error) => {
        if (error) {
          console.error(error)
        }
      })
      console.log(session)

      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/dopost1/",
        headers: {'X-CSRFToken': data['token']},
        data: { 
          'input1': "aaa", 
          'input2': "bbb"
        },
        success: function (data) {
          console.log(data)
          $('#message').text(`Success`)
        },
        error: function (xhr, textStatus, errorThrown) {
          $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`)
        },
      })
    },
    error: function (xhr, textStatus, errorThrown) {
      $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`)
    },
  })

  // $.ajax({
  //   type: "GET",
  //   url: "http://127.0.0.1:8000/code2/",
  //   success: function (data) {
  //     // console.log(data) 
  //     const {body} = new DOMParser().parseFromString(data, 'text/html');
  //     const token = body.querySelector('input').getAttribute('value'); 
  //     console.log(token); 
  //     $.ajax({
  //       type: "POST",
  //       url: "http://127.0.0.1:8000/dosignin/",
  //       headers: {'X-CSRFToken': token},
  //       data: $(this).serialize(),
  //       success: function (data) {
  //         console.log(data)
  //         $('#message').text(`Success`)
  //       },
  //       error: function (xhr, textStatus, errorThrown) {
  //         $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`)
  //       },
  //     })
  //   },
  //   error: function (xhr, textStatus, errorThrown) {
  //     $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`)
  //   },
  // })

  // csrfmiddlewaretoken
}

console.log(session)
$('#loginform').submit(doSubmit)
