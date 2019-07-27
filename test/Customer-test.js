import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import Hotel from "../src/Hotel";
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';
import bookings from '../src/data/bookings-data';

describe('Customer', () => {
  let customer;
  let hotel;

  beforeEach(() => {
    let name = 'Samantha Freeman';
    let id = 42;
    let bookings = [];
    let roomServices = [];
    customer = new Customer(name, id, bookings, roomServices);
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

});