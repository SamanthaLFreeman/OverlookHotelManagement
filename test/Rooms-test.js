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
    expect(rooms.findMostPopularDate()).to.eql('2019/08/24');
  });

  it.skip('should find date with more availability', () => {
    expect(rooms.findMostAvailableDate()).to.eql('2019/10/18');
  });

  it.skip('should find availability based on a specific date', () => {
    expect(rooms.findTheAvailabilityForADate('2019/08/24')).to.eql(15);
  });

  it.skip('should find all available room types for specific date', () => {
    expect(rooms.findAllRoomTypesAvailable('2019/08/24').length).to.eql(4);
  })

  // it.skip('should be able to make new reservations', () => {
  //   expect(rooms.createNewBooking('')).to.eql();
  // })

});