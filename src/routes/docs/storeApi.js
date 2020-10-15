const req_res_object = {
  name: { type: 'string' },
  address: { type: 'string' },
  phone: { type: 'string' },
  email: { type: 'string', format: 'email' },
  mapReference: {
    type: 'object',
    properties: {
      latitude: { type: 'string' },
      longitude: { type: 'string' }
    }
  },
  images: {
    type: 'object',
    properties: {
      image_one: { type: 'string' },
      image_two: { type: 'string' },
      image_three: { type: 'string' }
    }
  }
}



exports.getStoresSchema = {
  description: 'Get all Stores',
  tags: ['stores'],
  summary: 'Get all Stores information',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      // properties: Object.assign({
      //   _id: { type: 'string' },
      //   __v: { type: 'number' }
      // }, req_res_object)
    }
  }
}



exports.getStoreSchema = {
  description: 'Get Store',
  tags: ['stores'],
  summary: 'Get Store information with given id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'id of store to get'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: Object.assign({
        _id: { type: 'string' },
        __v: { type: 'number' }
      }, req_res_object)
    }
  }
}



exports.addStoreSchema = {
  description: 'Create a new Store',
  tags: ['stores'],
  summary: 'Creates new Store with given values',
  body: {
    type: 'object',
    properties: req_res_object
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: Object.assign({
        _id: { type: 'string' },
        __v: { type: 'number' }
      }, req_res_object)
    }
  }
}



exports.updateStoreSchema = {
  description: 'Update Store information',
  tags: ['stores'],
  summary: 'Update Store with given id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'id of Store to update'
      }
    }
  },
  body: {
    type: 'object',
    properties: req_res_object
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: Object.assign({
        _id: { type: 'string' },
        __v: { type: 'number' }
      }, req_res_object)
    }
  }
}



exports.deleteStoreSchema = {
  description: 'Delete store',
  tags: ['stores'],
  summary: 'Delete store with given id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'id of store to delete'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: Object.assign({
        _id: { type: 'string' },
        __v: { type: 'number' }
      }, req_res_object)
    }
  }
}
