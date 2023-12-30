const queryString = (objectData) => {
  const stringDataList = []

  for (const label in objectData) {
    stringDataList.push(`${label}=${objectData[label]}`)
  }

  const queryString = stringDataList.join('&')

  return queryString
}

module.exports = { queryString }
