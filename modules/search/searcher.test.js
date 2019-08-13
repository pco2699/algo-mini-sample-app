import Searcher from './searcher.js'
import ticketGenerator from './search_util'

test('test linear search', () => {
  const tickets = ticketGenerator(10)
  const res = Searcher.linearSearch(tickets, 5)
  expect(res).toEqual(expect.anything())
  expect(res.id).toEqual(5)
})

test('test binary search', () => {
  const tickets = ticketGenerator(10)
  const res = Searcher.binarySearch(tickets, 5)
  expect(res).toEqual(expect.anything())
  expect(res.id).toEqual(5)
})
