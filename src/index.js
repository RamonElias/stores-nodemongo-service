// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Require external modules
const mongoose = require('mongoose')

const { port, mongo_user, mongo_passw, mongo_address, mongo_db } = require('./config');

// Connect to DB
const uri = `mongodb+srv://${mongo_user}:${mongo_passw}@${mongo_address}/${mongo_db}?retryWrites=true&w=majority`;
// mongoose.connect('mongodb://localhost:27017/stores', {
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log('MongoDB Connected…') })
  .catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Declare a route
fastify.get('/', async (request, reply) => {
  // return { 'check Swagger': `http://localhost:${port}/docs` }
  return { 'check Swagger': `${swagger.options.swagger.host}${swagger.options.routePrefix}` }
})

// Declare another route
// fastify.get('/foo', async (request, reply) => {
//   return { bar: 'baz' }
// })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(`${port}`, '0.0.0.0')
    fastify.swagger()
    // fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

