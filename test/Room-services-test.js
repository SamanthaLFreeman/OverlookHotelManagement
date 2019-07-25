import chai from 'chai';
const expect = chai.expect;
import RoomServices from '../src/Room-services';

describe('Roomservices', () => {
  let roomServices;

  beforeEach(() => {
    roomServices = new RoomServices();
  });

  it('should be an instance of RoomServices', () => {
    expect(roomServices).to.be.an.instanceof(RoomServices);
  });
});