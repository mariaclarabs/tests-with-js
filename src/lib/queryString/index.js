const isAnObject = (value) => typeof value === 'object'

const isNotAnArray = (value) => !Array.isArray(value)

const parseKeyValueToString = ([label, value]) => {
  if (isAnObject(value) && isNotAnArray(value)) {
    throw new Error('Object values are not supported')
  }

  return `${label}=${value}`
}

const parseObjectToQueryString = (objectData) => {
  return Object.entries(objectData).map(parseKeyValueToString).join('&')
}

const parseQueryStringToObject = (queryString) => {
  return Object.fromEntries(
    queryString.split('&').map((item) => item.split('='))
  )
}

module.exports = { parseObjectToQueryString, parseQueryStringToObject }
