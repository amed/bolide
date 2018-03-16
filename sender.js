let dgram = require('dgram')
let client = dgram.createSocket('udp4')

const sendLove = () => {
  let message = `${new Date().getTime()} a pulse comes`
  client.send(message, 41234)
  console.log(message)
}

const interval = setInterval(sendLove, 1)

setTimeout(() => {
  clearInterval(interval)
  client.close()
  console.log('done!')
}, 5000)
