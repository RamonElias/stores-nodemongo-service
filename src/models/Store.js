const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: [true, 'Store Name Required!'],
    minlength:[2, 'Min Store Name length is 2 characters'],
    maxlength:[100, 'Max Store Name length is 100 characters']
  },
  address: {
    type: String,
    required: [true, 'Store Address Required!'],
    minlength:[5, 'Min Store Address length is 5 characters'],
    maxlength:[100, 'Max Store Address length is 100 characters']
  },
  phone: {
    type: String,
    // unique: true,
    required: [true, 'Store Phone Required!'],
    minlength:[7, 'Min Store Phone length is 7 characters'],
    maxlength:[30, 'Max Store Phone length is 30 characters']
  },
  email: {
    type: String,
    // unique: true,
    required: [true, 'Store Email Required!'],
    minlength:[5, 'Min Store Email length is 5 characters'],
    maxlength:[100, 'Max Store Email length is 100 characters']
  },
  mapReference: {
    latitude: {
      type: String,
      required: [true, 'Store Latitude Required!'],
      minlength:[2, 'Min Store Latitude length is 2 characters'],
      maxlength:[20, 'Max Store Latitude length is 20 characters']
    },
    longitude: {
      type: String,
      required: [true, 'Store Longitude Required!'],
      minlength:[2, 'Min Store Longitude length is 2 characters'],
      maxlength:[20, 'Max Store Longitude length is 20 characters']
    }
  },
  images: {
    image_one: {
      type: String,
      validate: {
        validator: function (v) {
          return (/^https?:\/\/[^\s]+/g.test(v));
        },
        message: props => `${props.value} is not a valid html link! ; sample => https://unsplash.com/photos/gGC63oug3iY`
      }
    },
    image_two: {
      type: String,
      validate: {
        validator: function (v) {
          return (/^https?:\/\/[^\s]+/g.test(v));
        },
        message: props => `${props.value} is not a valid html link! ; sample => https://unsplash.com/photos/gGC63oug3iY`
      }
    },
    image_three: {
      type: String,
      validate: {
        validator: function (v) {
          return (/^https?:\/\/[^\s]+/g.test(v));
        },
        message: props => `${props.value} is not a valid html link! ; sample => https://unsplash.com/photos/gGC63oug3iY`
      }
    }
  }
})

module.exports = mongoose.model('Store', storeSchema)


