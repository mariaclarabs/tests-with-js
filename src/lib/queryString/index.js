const queryString = (objectData) =>
  Object.entries(objectData)
    .map(([label, value]) => `${label}=${value}`)
    .join('&')

module.exports = { queryString }
