export default class Searcher {
  static linearSearch(tickets, target) {
    for (const ticket of tickets) {
      if (ticket.id === target) {
        return ticket
      }
    }
    return null
  }

  static binarySearch(tickets, target) {
    if (tickets.length === 0) {
      return null
    }
    let left = 0
    let right = tickets.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (tickets[mid].id === target) {
        return tickets[mid]
      } else if (tickets[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return null
  }
}
