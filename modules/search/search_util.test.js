import ticketGenerator from './search_util.js'

test('test ticketGenerator', () => {
  const res = ticketGenerator(10)
  const expected = [
    {
      id: 1,
      contents: ''
    },
    {
      id: 2,
      contents: ''
    },
    {
      id: 3,
      contents: ''
    },
    {
      id: 4,
      contents: ''
    },
    {
      id: 5,
      contents: ''
    },
    {
      id: 6,
      contents: ''
    },
    {
      id: 7,
      contents: ''
    },
    {
      id: 8,
      contents: ''
    },
    {
      id: 9,
      contents: ''
    },
    {
      id: 10,
      contents: ''
    }
  ]
  res.forEach((r, i) => {
    expect(r.id).toEqual(expected[i].id)
  })
  expect(res.length).toEqual(10)
})
