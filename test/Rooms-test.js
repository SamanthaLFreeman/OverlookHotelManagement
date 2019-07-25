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
});