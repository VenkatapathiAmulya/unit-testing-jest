const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('properly subtracting two numbers0',()=> {
    expect(
        subtract(1,2)
    ).toBe(-1)
})