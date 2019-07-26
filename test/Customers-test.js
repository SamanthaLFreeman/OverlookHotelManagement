import chai from 'chai';
const expect = chai.expect;
import Customers from '../src/Customers';

describe('Customers', () => {
  let customers;

  beforeEach(() => {
    customers = new Customers();
  });

  it('should be an instance of Users', () => {
    expect(customers).to.be.an.instanceof(Customers);
  });

  it.skip('should find a customer by their name', () => {
    expect(customers.findCustomer()).to.eql();
  });

  it.skip('should create a new customer', () => {
    expect(customers.addNewCustomer()).to.eql();
  });

});