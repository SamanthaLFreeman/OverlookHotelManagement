import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';
import bookings from '../src/data/bookings-data';
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';
import Customers from "../src/Customers";



describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(users, bookings, roomServices, rooms);
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should store the data inside of the hotel object', () => {
    expect(hotel.usersData.length).to.eql(30);
  });

  it('should calculate number of rooms available for today', () => {
    expect(hotel.calculateAvailableRoomsforToday('2019/08/24')).to.eql(21);
  });

  it('should calculate the total revenue for today', () => {
    expect(hotel.calculateTotalRevenueToday('2019/09/01')).to.eql(744.06);
  });

  it('should find the percentage rooms occupied for today', () => {
    expect(hotel.findPercentageRoomsOccupied('2019/08/24')).to.eql(16);
  })

  it('should create a new instance of Customers', () => {
    hotel.createCustomers();
    expect(hotel.customers).to.be.an.instanceOf(Customers);
  })
});