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

  it('should find a customer by their name', () => {
    expect(customers.findCustomer()).to.eql();
  })
});