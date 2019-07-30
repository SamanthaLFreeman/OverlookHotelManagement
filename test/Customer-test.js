import chai from 'chai';
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
import Customer from '../src/Customer';
import Hotel from '../src/Hotel';
import domUpdates from '../src/dom-updates';
import bookings from '../src/data/bookings-data';
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';

chai.spy.on(domUpdates, ['addRoomBill', 'addRoomService'], () => { });


describe('Customer', () => {
  let customer;
  let hotel;

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
    hotel = new Hotel(users, bookings, roomServices, rooms);
    customer = new Customer(name, id, bookings, roomServices, hotel);
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
    expect(customer.totalSpentOnRoomServices()).to.eql(20.40);
  });

  it('should sort Bookings by date', () => {
    expect(customer.sortDateBookings()[0].date).to.eql("2019/08/24");
  });

  it('should add a new list of Room Services to the DOM with the updated array', () => {
    customer.createSelectedRoomService('2019/08/24', 'sandwich', 5.99);
    expect(domUpdates.addRoomService).to.have.been.called(1); 
  });

  it('should add a new Room Bill to the DOM with the updated array', () => {
    customer.createSelectedBooking('2019/08/24', 1);
    expect(domUpdates.addRoomBill).to.have.been.called(1);
  });

});