const { queryString } = require(".")

describe('', () => {
	it('should create a valid query string when an object', () => {
		const userData = {
			name: 'Maria',
			role: 'Developer'
		}

		const expectedQueryString = 'name=Maria&role=Developer'

		expect(queryString(userData)).toBe(expectedQueryString)
	})
})
