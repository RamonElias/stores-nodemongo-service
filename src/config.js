// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongo_user: process.env.ATLAS_MONGODB_CLUSTER_USER,
  mongo_passw: process.env.ATLAS_MONGODB_CLUSTER_USER_PASSW,
  mongo_address: process.env.ATLAS_MONGODB_CLUSTER_ADDRESS,
  mongo_db: process.env.ATLAS_MONGODB_CLUSTER_DB,
}
