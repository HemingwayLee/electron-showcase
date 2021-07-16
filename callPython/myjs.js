const pyshell = require('python-shell')
const filename = 'hello.py'

function runPython() {  
  console.log(`run ${filename}`)

  pyshell.PythonShell.run(filename, null, function(err, results) {
    if (err) {
      throw err
    }
    console.log(`${filename} finished`)
    
    $('#res').html(results)
  });
}

runPython()
