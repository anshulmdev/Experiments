const axios = require('axios');
const dependencyModule = require("./dependencyModule");

function getTheSecret() {
  return `The secret was: ${dependencyModule.getSecretNumber()}`;
}

const sum = (a,b) => {
  return a+b
}

const todo = async (id) => {
  const req = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
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
module.exports = { sum, todo, timeStamp, setupNewUser, getTheSecret}
