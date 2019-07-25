import chai from 'chai';
const expect = chai.expect;
import RoomServicesRepo from '../src/Room-services-repo';

describe('Room Services Repo', () => {
  let roomServicesRepo;

  beforeEach(() => {
    roomServicesRepo = new RoomServicesRepo();
  });

  it('should be an instance of RoomServices', () => {
    expect(roomServicesRepo).to.be.an.instanceof(RoomServicesRepo);
  });
});