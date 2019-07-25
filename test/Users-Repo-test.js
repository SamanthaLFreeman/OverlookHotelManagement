import chai from 'chai';
const expect = chai.expect;
import UsersRepo from '../src/Users-repo';

describe('Users Repo', () => {
  let usersRepo;

  beforeEach(() => {
    usersRepo = new UsersRepo();
  });

  it('should be an instance of RoomServices', () => {
    expect(usersRepo).to.be.an.instanceof(UsersRepo);
  });
});