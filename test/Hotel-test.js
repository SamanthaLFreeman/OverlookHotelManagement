import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';
import bookings from '../src/data/bookings-data';
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';
import Customer from "../src/Customer";
import Rooms from "../src/Rooms"


describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(users, bookings, roomServices, rooms);
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should store the data inside of the hotel object', () => {
    expect(hotel.bookingsData.length).to.eql(19);
  });

  it('should calculate number of rooms available for today', () => {
    expect(hotel.calculateAvailableRoomsforToday('2019/08/24')).to.eql(21);
  });

  it('should calculate the total revenue for today', () => {
    expect(hotel.calculateTotalRevenueToday('2019/08/24')).to.eql(468.55);
  });

  it('should find the percentage rooms occupied for today', () => {
    expect(hotel.findPercentageRoomsOccupied('2019/08/24')).to.eql(16);
  });

  it('should create a new instance of Customer', () => {
    hotel.createCustomer('Brook Christiansen');
    expect(hotel.currentCustomer).to.be.an.instanceOf(Customer);
  });

  it('should add a new customer to the users data', () => {
    hotel.createNewCustomer('Samantha Freeman')
    expect(hotel.usersData.length).to.eql(31);
  });

  it('should create a new instance of Rooms', () => {
    hotel.createRooms();
    expect(hotel.rooms).to.be.an.instanceOf(Rooms);
  });

  it('should remove the sold room', () => {
    hotel.removeRooms();
    expect(hotel.roomsData.length).to.eql(24);
  });

  it('should remove the sold food', () => {
    hotel.removeFood();
    expect(hotel.roomServiceData.length).to.eql(18);
  });
});