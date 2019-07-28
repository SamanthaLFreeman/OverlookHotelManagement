import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    let name = 'Samantha Freeman';
    let id = 42;
    let bookings = [];
    let roomServices = [
      {
        userID: 42,
        date: "2019/09/01",
        food: "Rustic Concrete Sandwich",
        totalCost: 14.9
      }
    ];
    customer = new Customer(name, id, bookings, roomServices);
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should find all orders for the customer', () => {
    expect(customer.roomServices.length).to.eql(1);
  });
});