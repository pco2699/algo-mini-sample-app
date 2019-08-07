import ticketGenerator from './search_util.js'

test('test ticketGenerator', () => {
  const res = ticketGenerator(10)
  console.log(res)
  expect(res.length).toEqual(10)
})
