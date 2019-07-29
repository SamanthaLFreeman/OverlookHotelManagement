import domUpdates from './dom-updates';

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

  createSelectedBooking(today, num) {
    this.bookings.push({
      userID: this.id,
      date: today,
      roomNumber: parseInt(num)
    })
    domUpdates.addRoomBill(this.bookings);

  }
}

export default Customer;