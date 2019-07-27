class Customer {
  constructor(name, id, bookings, roomServices) {
    this.name = name;
    this.id = id;
    this.bookings = bookings;
    this.roomServices = roomServices;
  }

  // findCustomer(custName) {
  //   return this.data.find(customer => customer.name === custName);
  // }

  // findAllCustomerNames() {
  //   return this.data.map(customer => customer.name)
  // }

  // addNewCustomer(newName) {
  //   let newId = this.data.length + 1
  //   return this.data.push({
  //     'name': newName,
  //     'id': newId
  //   })
  // }
}

export default Customer;