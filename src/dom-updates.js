import $ from 'jquery';

let domUpdates = {

  findCurrentDate() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    return `${year}/${month}/${day}`;
  },

  displayCurrentDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let currentDate = new Date();
    let displayDate =
    days[currentDate.getDay()] +
    " - " +
    months[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    ", " +
    currentDate.getFullYear();
    return displayDate;
  },

  addCustomersList(customers) {
    customers.forEach(customer => {
      $('.customers-list').append(`<li class="customer-bullet" id="${customer.id}">${customer.name}</li>`)
    })
  },

  addFoundCustomer(customer) {
    $('#js-customers-list').append(`<li class="customer-bullet" id="${customer.id}">${customer.name}</li>`)
  },

  clickOnUser(pickedCustomer) {
    let id = pickedCustomer.id;
    let name = $(`#${id}`).html();
    $('#js-customer-name').html(name)
  },
  
  addRowsForAllOrders(roomServiceData) {
    roomServiceData.forEach(data => {
      $('#js-all-orders-table').append(`<tr>
                <td>${data.food}</td>
                <td>${data.totalCost}</td>
              </tr>`)
    })
  }

}

export default domUpdates;