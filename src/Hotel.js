import Customers from "./Customers";

class Hotel {
  constructor(usersData, bookingsData, roomServiceData, roomsData) {
    this.usersData = usersData;
    this.bookingsData = bookingsData;
    this.roomServiceData = roomServiceData;
    this.roomsData = roomsData;
    this.customers;
  }

  findBookedRoomsforToday(today) {
    return this.bookingsData.filter(booking => booking.date === today);
  }

  calculateAvailableRoomsforToday(today) {
    let bookingsToday = this.findBookedRoomsforToday(today);
    return this.roomsData.length - bookingsToday.length;
  }

  findRoomServiceChargesToday(today) {
    return this.roomServiceData.filter(roomService => roomService.date === today).reduce((sum, roomService) => {
      sum += roomService.totalCost
      return sum
    }, 0)
  }

  calculateTotalRevenueToday(today) {
    let roomServiceToday = this.findRoomServiceChargesToday(today);
    let bookingsToday = this.findBookedRoomsforToday(today).map(booking => booking.roomNumber);
    let bookedRooms = bookingsToday.map(num => {
      return this.roomsData.filter(room => room.number === num);
    }).flat();
    return bookedRooms.reduce((sum, room) => {
      sum += room.costPerNight;
      return sum;
    }, roomServiceToday)
  }

  findPercentageRoomsOccupied(today) {
    let bookingsToday = this.findBookedRoomsforToday(today);
    return (bookingsToday.length / this.roomsData.length) * 100;
  }

  createCustomers() {
    this.customers = new Customers(this.usersData, this);
  }
}

export default Hotel;