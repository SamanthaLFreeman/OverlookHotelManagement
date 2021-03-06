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
    let total = bookedRooms.reduce((sum, room) => {
      sum += room.costPerNight;
      return sum;
    }, roomServiceToday)
    return parseFloat(total.toFixed(2));
  }

  findPercentageRoomsOccupied(today) {
    let bookingsToday = this.findBookedRoomsforToday(today);
    let percent = (bookingsToday.length / this.roomsData.length) * 100;
    return parseFloat(percent.toFixed(2));
  }

  filterCustomerData(data, id) {
    return this[data].filter(el => el.userID === id);
  }

  createCustomer(name) {
    let findUser = this.usersData.find(user => user.name === name);
    let bookings = this.filterCustomerData('bookingsData', findUser.id);
    let roomServices = this.filterCustomerData('roomServiceData', findUser.id);
    this.currentCustomer = new Customer(findUser.name, findUser.id, bookings, roomServices, this);
  }

  createNewCustomer(name) {
    let id = this.usersData.length + 1;
    this.currentCustomer = new Customer(name, id, [], [], this);
    this.usersData.push({id, name})
  }

  createRoomServices() {
    this.roomServices = new RoomServices(this.roomServiceData)
  }

  createRooms() {
    this.rooms = new Rooms(this.roomsData, this.bookingsData);
  }

  removeRooms(num) {
    let index = this.roomsData.findIndex(room => room.number === parseInt(num));
    this.roomsData.splice(index, 1);
    return this.roomsData;
  }

  removeFood(price) {
    let index = this.roomServiceData.findIndex(roomService => roomService.totalCost === parseFloat(price));
    this.roomServiceData.splice(index, 1);
    return this.roomServiceData;
  }

}

export default Hotel;