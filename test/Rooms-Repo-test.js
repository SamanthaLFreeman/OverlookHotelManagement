import chai from 'chai';
const expect = chai.expect;
import RoomsRepo from '../src/Rooms-repo';

describe('Rooms Repo', () => {
  let roomsRepo;

  beforeEach(() => {
    roomsRepo = new RoomsRepo();
  });

  it('should be an instance of RoomServices', () => {
    expect(roomsRepo).to.be.an.instanceof(RoomsRepo);
  });
});