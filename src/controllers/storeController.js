const boom = require('@hapi/boom')

// Get Data Models
const Store = require('../models/Store')

// Get all stores
exports.getStores = async (req, reply) => {
  try {
    const stores = await Store.find()
    return stores
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single store by ID
exports.getSingleStore = async (req, reply) => {
  try {
    const id = req.params.id
    const store = await Store.findById(id)
    return store
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new store
exports.addStore = async (req, reply) => {
  try {
    console.log(req)
    const store = new Store(req.body)
    return store.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing store
exports.updateStore = async (req, reply) => {
  try {
    const id = req.params.id
    const store = req.body
    const { ...updateData } = store
    const update = await Store.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a store
exports.deleteStore = async (req, reply) => {
  try {
    const id = req.params.id
    const store = await Store.findByIdAndRemove(id)
    return store
  } catch (err) {
    throw boom.boomify(err)
  }
}

