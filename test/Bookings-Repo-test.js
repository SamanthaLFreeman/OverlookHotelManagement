import chai from 'chai';
const expect = chai.expect;
import BookingsRepo from '../src/Bookings-repo';

describe('Bookings Repo', () => {
  let bookingsRepo;

  beforeEach(() => {
    bookingsRepo = new BookingsRepo();
  });

  it('should be an instance of RoomServices', () => {
    expect(bookingsRepo).to.be.an.instanceof(BookingsRepo);
  });
});