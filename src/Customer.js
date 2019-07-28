class Customer {
  constructor(name, id, bookings, roomServices) {
    this.name = name;
    this.id = id;
    this.bookings = bookings;
    this.roomServices = roomServices;
  }

  sortDateRoomServices() {
    return this.roomServices.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
  }

  totalSpentOnRoomServices() {
    return this.roomServices.reduce((sum, roomService) => {
      sum += roomService.totalCost
      return sum;
    }, 0)
  }

  sortDateBookings() {
    return this.bookings.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }
}

export default Customer;