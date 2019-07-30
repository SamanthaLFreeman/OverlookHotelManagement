import domUpdates from './dom-updates';

class Customer {
  constructor(name, id, bookings, roomServices, hotel) {
    this.name = name;
    this.id = id;
    this.bookings = bookings;
    this.roomServices = roomServices;
    this.hotelBookings = hotel.bookingsData;
    this.hotelRoomServices = hotel.roomServiceData;
    console.log(this.roomServices)
  }

  sortDateRoomServices() {
    return this.roomServices.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
  }

  totalSpentOnRoomServices() {
    return this.roomServices.reduce((sum, roomService) => {
      sum += roomService.totalCost
      return sum
    }, 0).toFixed(2);
  }

  sortDateBookings() {
    return this.bookings.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }

  updateHotelBookings(today, num) {
    this.hotelBookings.push({
      userID: this.id,
      date: today,
      roomNumber: parseInt(num)
    })
  }

  createSelectedBooking(today, num) {
    this.bookings.push({
      userID: this.id,
      date: today,
      roomNumber: parseInt(num)
    })
    this.updateHotelBookings(today, num)
    domUpdates.addRoomBill(this.bookings);
  }

  createSelectedRoomService(today, food, price) {
    this.roomServices.push({
      userId: this.id,
      date: today,
      food,
      totalCost: parseFloat(price)
    })
    this.hotelRoomServices.push({
      userId: this.id,
      date: today,
      food,
      totalCost: parseFloat(price)
    })
    domUpdates.addRoomService(this.roomServices)
  }
}

export default Customer;