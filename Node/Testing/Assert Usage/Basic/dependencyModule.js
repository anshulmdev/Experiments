function getSecretNumber() {
  return 44;
}

function getDate () {
  return String(new Date());
}
const sum = (a,b) => {
  return a+b
}

module.exports = {
  getSecretNumber,
  getDate,
  sum
};
