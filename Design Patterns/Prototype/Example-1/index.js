const lib = require("lib")({ token: process.env.STDLIB_SECRET_TOKEN });
const axios = require("axios");

class PollingScript {
  constructor(clientName) {
    this.clientName = clientName;
  }
  static getObjects = async function() {
    const url = await this.getURL();
    const body = await this.getFilterObject();
    const getCards = await axios.post(url, body);
    return getCards.data.results;
  }
  async updateFirebase(date) {
    const params = { params: { auth: `${process.env.FIREBASE}` } };
    const headers = { headers: { "Content-Type": "application/json" } };
    const url = `${process.env.FIREBASE_URL}/${this.clientName}.json`;
    const body = this.getFirebaseBody(date);
    await axios.patch(url, body, params, headers);
    return "Firebase Updated";
  }

  async triggerWorkflow() {
    const entities = await this.getObjects();
    if (entities.length > 0) {
      const newTimeStamp = Date.parse(entities[0].properties.createdate);
      await this.updateFirebase(newTimeStamp);
      await this.reportDiscord(entities.length);
      for (let i = 0; i < entities.length; i++) {
        await this.runWorkflow(entities[i]);
      }
      return "New Entries Found";
    } else return "No New Entries";
  }
}

module.exports = PollingScript;
