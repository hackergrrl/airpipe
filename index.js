var crypto = require('crypto')
var duplexify = require('duplexify')
var hyperswarm = require('@hyperswarm/network')

function initiate (topic, opts) {
  var net = hyperswarm()
  // look for peers listed under this topic
  var topicBuffer = crypto.createHash('sha256')
    .update(topic)
    .digest()
  net.join(topicBuffer, opts)
  return net
}

exports.connect = function (topic) {
  var stream = duplexify()
  var net = initiate(topic, {
    lookup: true // find & connect to peers
  })

  console.log('ready')
  net.on('connection', (socket, details) => {
    console.log('conn found', details)
    stream.setReadable(socket)
    stream.setWritable(socket)

    // we have received everything
    socket.on('end', function () {
      net.leave(topic)
    })
  })
  return stream
}
