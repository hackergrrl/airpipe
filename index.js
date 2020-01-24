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

exports.connect = function (topic, cb) {
  var net = initiate(topic, {
    lookup: true, // find & connect to peers
    announce: true
  })

  console.log('ready')
  net.on('connection', (socket, details) => {
    console.log('conn found', details)
    cb(null, socket)

    // we have received everything
    socket.on('end', function () {
      net.leave(topic)
    })
  })
}
