const { queryString } = require('.')

describe('', () => {
  it('should create a valid query string when an object is provided', () => {
    const userData = {
      name: 'Maria',
      role: 'Developer',
    }

    const expectedQueryString = 'name=Maria&role=Developer'

    expect(queryString(userData)).toBe(expectedQueryString)
  })

  it('should create a valid query string when an array is passed as value', () => {
    const userData = {
      name: 'Maria',
      role: 'Developer',
      skills: ['HTML', 'CSS', 'JavaScript'],
    }

    const expectedQueryString =
      'name=Maria&role=Developer&skills=HTML,CSS,JavaScript'

    expect(queryString(userData)).toBe(expectedQueryString)
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
      queryString(userData)
    }).toThrow()
  })
})
