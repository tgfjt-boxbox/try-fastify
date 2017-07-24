const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({ logger: log })

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

fastify.register(require('./routes/hello'), function (err) {
  if (err) throw err
})


fastify.get('/log', (req, reply) => {
  req.log.info('includes request information, but is the same logger instance as `log`')
  reply.view('/src/views/index.ejs', { text: 'text' })
})

// fastify.register([
//   require('./another-route'),
//   require('./yet-another-route')
// ], opts, function (err) {
//   if (err) throw err
// })

fastify.listen(8000, function (err) {
  if (err) throw err
  log.info(`server listening on ${fastify.server.address().port}`)
})