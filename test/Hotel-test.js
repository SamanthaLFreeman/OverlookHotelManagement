import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';
import bookings from '../src/data/bookings-data';
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(users, bookings, roomServices, rooms);
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it.skip('should store the data inside of the hotel object', () => {
    expect(hotel.usersData.length).to.eql(30);
  });

  it.skip('should calculate number of rooms available for today', () => {
    expect(hotel.calculateAvailableRooms('2019/09/01')).to.eql(23);
  });

  it.skip('should calculate the total revenue for today', () => {
    expect(hotel.calculateTotalRevenueToday('2019/09/01')).to.eql();
  });

  it.skip('should find the percentage rooms occupied for today', () => {
    expect(hotel.findPercentageRoomsOccupied('2019/09/01')).to.eql();
  })
});