const { parseObjectToQueryString, parseQueryStringToObject } = require('.')

describe('given object to query string conversion', () => {
  it('should create a valid query string when an object is provided', () => {
    const userData = {
      name: 'Maria',
      role: 'Developer',
    }

    const expectedQueryString = 'name=Maria&role=Developer'

    expect(parseObjectToQueryString(userData)).toBe(expectedQueryString)
  })

  it('should create a valid query string when an array is passed as value', () => {
    const userData = {
      name: 'Maria',
      role: 'Developer',
      skills: ['HTML', 'CSS', 'JavaScript'],
    }

    const expectedQueryString =
      'name=Maria&role=Developer&skills=HTML,CSS,JavaScript'

    expect(parseObjectToQueryString(userData)).toBe(expectedQueryString)
  })

  it('should throw an error when an object is passed as value', () => {
    const userData = {
      name: 'Maria',
      role: 'Developer',
      skills: {
        first: 'HTML',
        second: 'CSS',
        third: 'JavaScript',
      },
    }

    expect(() => {
      parseObjectToQueryString(userData)
    }).toThrow()
  })
})

describe('given query string to object conversion', () => {
  it('should convert a query string to an object', () => {
    const queryString = 'name=Maria&role=Developer'

    const expectedObject = {
      name: 'Maria',
      role: 'Developer',
    }

    expect(parseQueryStringToObject(queryString)).toEqual(expectedObject)
  })

  it('should convert a query string of a single key-value object', () => {
    const queryString = 'name=Maria'

    const expectedObject = {
      name: 'Maria',
    }

    expect(parseQueryStringToObject(queryString)).toEqual(expectedObject)
  })

  it('should convert a query string to an object taking care of comma separated values', () => {
    const queryString = 'name=Maria&role=Developer&skills=HTML,CSS,JavaScript'

    const expectedObject = {
      name: 'Maria',
      role: 'Developer',
      skills: ['HTML', 'CSS', 'JavaScript'],
    }

    expect(parseQueryStringToObject(queryString)).toEqual(expectedObject)
  })
})
