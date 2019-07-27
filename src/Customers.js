class Customers {
  constructor(usersData) {
    this.usersData = usersData;
  }

  findCustomer(custName) {
    return this.usersData.find(customer => customer.name === custName);
  }

  findAllCustomerNames() {
    return this.usersData.map(customer => customer.name);
  }

}

export default Customers;