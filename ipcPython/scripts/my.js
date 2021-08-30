const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Request

  sock.connect(`tcp://127.0.0.1:5555`)
  console.log("Client connects to port 5555")

  await sock.send("4")
  const [result] = await sock.receive()

  console.log(`The result is ${result.toString()}`)

  document.querySelector('#result').textContent = result.toString()
}

function helloSend2Python() {
  run()
}
