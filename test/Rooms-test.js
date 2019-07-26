import chai from 'chai';
const expect = chai.expect;
import Rooms from '../src/Rooms';

describe('Rooms', () => {
  let rooms;

  beforeEach(() => {
    rooms = new Rooms();
  });

  it('should be an instance of Rooms', () => {
    expect(rooms).to.be.an.instanceof(Rooms);
  });

  it.skip('should find the most popular date', () => {
    expect(rooms.findMostPopularDate()).to.eql();
  });

  it.skip('should find date with more availability', () => {
    expect(rooms.findMostAvailableDate()).to.eql();
  });

  it.skip('should find availability based on a specific date', () => {
    expect(rooms.findTheAvailabilityForADate('')).to.eql();
  });

  it.skip('should find all available room types for specific date', () => {
    expect(rooms.findAllRoomTypesAvailable('')).to.eql();
  })

  it.skip('should find all bookings for a specific customer', () => {
    expect(rooms.findAllBookingsForCustomer('')).to.eql();
  });

  it.skip('should be able to make new reservations', () => {
    expect(rooms.createNewBooking('')).to.eql();
  })

});