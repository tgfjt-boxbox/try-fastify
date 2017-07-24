const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}

module.exports = function (fastify, options, next) {
  fastify.get('/', opts, function (req, reply) {
    reply.send({ hello: 'world' })
  })
  next()
}