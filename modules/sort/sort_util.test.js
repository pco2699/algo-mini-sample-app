import ticketGenerator from './sort_util.js'

test('test ticketGenerator', () => {
  const excepted = [
    { id: 1, content: 'HogeFuga' },
    { id: 2, content: 'HogeFuga' },
    { id: 3, content: 'HogeFuga' },
    { id: 4, content: 'HogeFuga' },
    { id: 5, content: 'HogeFuga' },
    { id: 6, content: 'HogeFuga' },
    { id: 7, content: 'HogeFuga' },
    { id: 8, content: 'HogeFuga' },
    { id: 9, content: 'HogeFuga' },
    { id: 10, content: 'HogeFuga' }
  ]
  expect(ticketGenerator(10)).toEqual(excepted)
})
