import chai from 'chai';
const expect = chai.expect;
import Users from '../src/Users';

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
  });

  it('should be an instance of Users', () => {
    expect(users).to.be.an.instanceof(Users);
  });
});