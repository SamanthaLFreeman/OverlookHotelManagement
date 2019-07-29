class Rooms {
  constructor(roomsData, bookingsData) {
    this.roomsData = roomsData;
    this.bookingsData = bookingsData;
  }

  findMostPopularDate() {
    let bookingsByDate = this.bookingsData.reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = []
      }
      acc[booking.date].push(booking)
      return acc
    }, {})
    return Object.keys(bookingsByDate).sort((a, b) => {
      return bookingsByDate[b].length - bookingsByDate[a].length
    }).slice(0, 1)[0]
  }

  findMostAvailableDate() {
    let bookingsByDate = this.bookingsData.reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = []
      }
      acc[booking.date].push(booking)
      return acc
    }, {})
    return Object.keys(bookingsByDate).sort((a, b) => {
      return bookingsByDate[a].length - bookingsByDate[b].length
    }).slice(0, 1)[0]
  }

  findTheAvailabilityForADate(date) {
    let bookingsDate = this.bookingsData.filter(booking => booking.date === date);
    return this.roomsData.filter(room => !bookingsDate.some(booking => booking.roomNumber === room.number));
  }

}

export default Rooms;