let client = require('../dbConnect');
let projectCollection;

setTimeout(() => {
  projectCollection = client.MongoClient.db().collection('foods');
}, 2000);

// Insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

// Get project
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

module.exports = { insertProjects, getProjects };
