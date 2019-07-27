import chai from 'chai';
const expect = chai.expect;
import Customers from '../src/Customers';
import users from '../src/data/users-data';

describe('Customers', () => {
  let customers;

  beforeEach(() => {
    customers = new Customers(users);
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

  // it('should create a new customer', () => {
  //   expect(customers.addNewCustomer('Samantha Freeman')).to.eql();
  // });

});