import Customer from "../src/Customer";
import RoomServices from "./Room-services";
import Rooms from "./Rooms";

class Hotel {
  constructor(usersData, bookingsData, roomServiceData, roomsData) {
    this.usersData = usersData;
    this.bookingsData = bookingsData;
    this.roomServiceData = roomServiceData;
    this.roomsData = roomsData;
    this.currentCustomer;
    this.roomServices;
    this.rooms;
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

  filterCustomerData(data, id) {
    return this[data].filter(el => el.userID === id);
  }

  createCustomer(name) {
    let findUser = this.usersData.find(user => user.name === name);
    let bookings = this.filterCustomerData('bookingsData', findUser.id);
    let roomServices = this.filterCustomerData('roomServiceData', findUser.id);
    this.currentCustomer = new Customer(findUser.name, findUser.id, bookings, roomServices);
  }

  createNewCustomer(name) {
    let id = this.usersData.length + 1;
    this.currentCustomer = new Customer(name, id, [], []);
    this.usersData.push({id, name})
  }

  createRoomServices() {
    this.roomServices = new RoomServices(this.roomServiceData)
  }

  createRooms() {
    this.rooms = new Rooms(this.roomsData, this.bookingsData);
  }
}

export default Hotel;