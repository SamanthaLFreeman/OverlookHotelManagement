import chai from 'chai';
const expect = chai.expect;
import Customers from '../src/Customers';
import Hotel from "../src/Hotel";
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';
import bookings from '../src/data/bookings-data';

describe('Customers', () => {
  let customers;
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(users, bookings, roomServices, rooms);
    customers = new Customers(hotel);
  });

  it('should be an instance of Users', () => {
    expect(customers).to.be.an.instanceof(Customers);
  });

  it('should find a customer by their name', () => {
    expect(customers.findCustomer('Matilde Larson').id).to.eql(1);
  });

  it('should create a list of all users by name', () => {
    expect(customers.findAllCustomerNames()[0]).to.eql('Matilde Larson')
  })

  it('should create a new customer', () => {
    customers.addNewCustomer('Samantha Freeman');
    expect(customers.usersData[30].id).to.eql(31);
  });

});