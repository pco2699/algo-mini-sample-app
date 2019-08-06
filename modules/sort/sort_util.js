const ticketGenerator = (num) => {
  const obj = []
  for (let i = 1; i <= num; i++) {
    obj.push({
      id: i,
      content: 'HogeFuga'
    })
  }
  return obj
}

export default ticketGenerator
