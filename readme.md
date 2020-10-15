# Temporary running in => 



## Run this project locally

### git clone https://github.com/RamonElias/stores-nodemongo-service

### INSTALL DEPENDENCIES: 'npm install' OR 'yarn'

### Copy or Rename .env.sample file in .env

### Change this var if want to run in another local port 
- PORT=12369

### Fill this vars in .env file if you have an a MongoDb Atlas Cluster 
- ATLAS_MONGODB_CLUSTER_USER=
- ATLAS_MONGODB_CLUSTER_USER_PASSW=
- ATLAS_MONGODB_CLUSTER_ADDRESS=
- ATLAS_MONGODB_CLUSTER_DB=

### If you want to run in a local MongoDb instance then in src/index.js: 
- Uncomment this line => // mongoose.connect('mongodb://localhost:27017/stores', {
- Comment this line => mongoose.connect(uri, { 

### RUN INSTANCE: 'npm run start' OR 'npm run dev'

### CHECK SWAGGER DOCS API IN: http://localhost:12369/docs/



## License
- MIT


