const isAnObject = (value) => {
  return typeof value === 'object'
}

const isNotAnArray = (value) => {
  return !Array.isArray(value)
}

const parseKeyValueToString = ([label, value]) => {
  if (isAnObject(value) && isNotAnArray(value)) {
    throw new Error('Object values are not supported')
  }

  return `${label}=${value}`
}

const queryString = (objectData) => {
  return Object.entries(objectData).map(parseKeyValueToString).join('&')
}

module.exports = { queryString }
