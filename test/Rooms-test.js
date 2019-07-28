import chai from 'chai';
const expect = chai.expect;
import Rooms from '../src/Rooms';
import roomsData from '../src/data/rooms-data';
import bookings from '../src/data/bookings-data';

describe('Rooms', () => {
  let rooms;

  beforeEach(() => {
    rooms = new Rooms(roomsData, bookings);
  });

  it('should be an instance of Rooms', () => {
    expect(rooms).to.be.an.instanceof(Rooms);
  });

  it('should find the most popular booking date', () => {
    expect(rooms.findMostPopularDate()).to.eql('2019/08/24');
  });

  it('should find date with the most availability', () => {
    expect(rooms.findMostAvailableDate()).to.eql('2019/10/18');
  });

  it('should find availability based on a specific date', () => {
    expect(rooms.findTheAvailabilityForADate('2019/08/24')).to.eql(21);
  });

});