const axios = require('axios');
const dependencyModule = require("./dependencyModule");

function getTheSecret() {
  return `The secret was: ${dependencyModule.getSecretNumber()}`;
}


const todo = async (id) => {
  const req = await axios.get(`https://jsonplaceholder.typicode.com/todos/${dependencyModule.sum(id, 1)}`);
  return req.data
}

const timeStamp = async () => {
  return await dependencyModule.getDate();
}

const setupNewUser = (info) => {
  const Database = {
    save: (user) => { return "Done"}
  }

  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  try {
    return Database.save(user);
  }
  catch(err) {
    callback(err);
  }
}
module.exports = { todo, timeStamp, setupNewUser, getTheSecret}
