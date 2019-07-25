import chai from 'chai';
const expect = chai.expect;
import Bookings from '../src/Bookings';

describe('Bookings', () => {
  let bookings;

  beforeEach(() => {
    bookings = new Bookings();
  });

  it('should be an instance of Bookings', () => {
    expect(bookings).to.be.an.instanceof(Bookings);
  });
});