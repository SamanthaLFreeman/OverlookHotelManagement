import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    let name = 'Samantha Freeman';
    let id = 42;
    let bookings = [
      {
        userID: 42,
        date: "2019/08/24",
        roomNumber: 41
      },
      {
        userID: 42,
        date: "2019/08/28",
        roomNumber: 13
      }
    ];
    let roomServices = [
      {
        userID: 42,
        date: "2019/09/01",
        food: "Rustic Concrete Sandwich",
        totalCost: 14.9
      },
      {
        userID: 42,
        date: "2019/08/24",
        food: "Rustic Something Sandwich",
        totalCost: 5.5
      }
    ];
    customer = new Customer(name, id, bookings, roomServices);
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should find all orders for the customer', () => {
    expect(customer.roomServices.length).to.eql(2);
  });

  it('should sort Room Services by date', () => {
    expect(customer.sortDateRoomServices()[0].date).to.eql("2019/08/24");
  });

  it('should calculate total spent on Room Services', () => {
    expect(customer.totalSpentOnRoomServices()).to.eql(20.4);
  });

  it('should sort Bookings by date', () => {
    expect(customer.sortDateBookings()[0].date).to.eql("2019/08/24");
  });

});