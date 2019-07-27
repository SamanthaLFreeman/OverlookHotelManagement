import Hotel from "./Hotel";

class Customers {
  constructor(hotel) {
    this.data = hotel.usersData;
  }

  findCustomer(custName) {
    return this.data.find(customer => customer.name === custName);
  }

  findAllCustomerNames() {
    return this.data.map(customer => customer.name)
  }

  addNewCustomer(newName) {
    let newId = this.data.length + 1
    return this.data.push({
      'name': newName,
      'id': newId
    })
  }
}

export default Customers;