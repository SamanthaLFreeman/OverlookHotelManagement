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
    hotel = new Hotel(users, bookings, roomServices, rooms);
    customer = new Customer(hotel);
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  // it('should find a customer by their name', () => {
  //   expect(customer.findCustomer('Matilde Larson').id).to.eql(1);
  // });

  // it('should create a list of all users by name', () => {
  //   expect(customer.findAllCustomerNames()[0]).to.eql('Matilde Larson')
  // })

  // it('should create a new customer', () => {
  //   customer.addNewCustomer('Samantha Freeman');
  //   expect(customer.usersData[30].id).to.eql(31);
  // });

});