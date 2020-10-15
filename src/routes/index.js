const storeController = require('../controllers/storeController')

// Import Swagger docs
const docs = require('./docs/storeApi')

const routes = [
  {
    method: 'GET',
    url: '/api/stores',
    handler: storeController.getStores,
    schema: docs.getStoresSchema
  },
  {
    method: 'GET',
    url: '/api/stores/:id',
    handler: storeController.getSingleStore,
    schema: docs.getStoreSchema
  },
  {
    method: 'POST',
    url: '/api/stores',
    handler: storeController.addStore,
    schema: docs.addStoreSchema
  },
  {
    method: 'PUT',
    url: '/api/stores/:id',
    handler: storeController.updateStore,
    schema: docs.updateStoreSchema
  },
  {
    method: 'DELETE',
    url: '/api/stores/:id',
    handler: storeController.deleteStore,
    schema: docs.deleteStoreSchema
  }
]

module.exports = routes
