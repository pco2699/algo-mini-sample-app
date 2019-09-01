import ticketGenerator from './search_util.js'

test('test ticketGenerator', () => {
  const res = ticketGenerator(10)

  res.forEach((r, i) => {
    expect(r.id).toEqual(i + 1)
  })
  expect(res.length).toEqual(10)
})
