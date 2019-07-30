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
    $('.customers-list').html('');
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
      $('#js-all-orders-table').append(
        `<tr>
          <td>${data.food}</td>
          <td>$${data.totalCost}</td>
        </tr>`)
    })
  },

  addRowsForCustomerOrders(roomServiceData) {
    roomServiceData.forEach(data => {
      $('#js-customer-orders-table').append(
        `<tr>
          <td>${data.date}</td>
          <td>${data.food}</td>
          <td>$${data.totalCost}</td>
        </tr>`)
    })
  },

  checkForCustomerOrAll(tabName) {
    if ($('#js-customer-name').html() === 'All Customers') {
      $(`#js-${tabName}-customer`).hide();
      $(`#js-${tabName}-all`).show();
    } else {
      $(`#js-${tabName}-customer`).show();
      $(`#js-${tabName}-all`).hide();
    }
  },

  totalOrdersForCustomers(name, total) {
    $('#js-customer-name-orders').html(name)
    $('#js-orders-total').html(total)
  },

  addRowsForAllAvailableRooms(roomsAvailData) {
    $('#js-all-available-table').show();
    $('#js-available-date-table').html('');
    roomsAvailData.forEach(data => {
      $('#js-available-date-table').append(
        `<tr>
          <td>${data.number}</td>
          <td>${data.roomType}</td>
          <td>${data.bidet}</td>
          <td>${data.bedSize}</td>
          <td>${data.numBeds}</td>
          <td>$${data.costPerNight}</td>
        </tr>`)
    })
  },

  addRowsForCustomersBookings(bookingsData) {
    $('#js-customer-bookings-table').html('');
    bookingsData.forEach(data => {
      $('#js-customer-bookings-table').append(
        `<tr>
          <td>${data.date}</td>
          <td>${data.roomNumber}</td>
        </tr>`)
    })
  },

  addRowsForCustomerAvailableRooms(roomsAvailData) {
    $('#js-customer-available-table').show();
    $('#js-available-table').html('');
    roomsAvailData.forEach(data => {
      $('#js-available-table').append(
        `<tr id=rooms-${data.number}>
          <td id="num">${data.number}</td>
          <td id="roomType">${data.roomType}</td>
          <td id="bidet">${data.bidet}</td>
          <td id="bedSize">${data.bedSize}</td>
          <td id="numBeds">${data.numBeds}</td>
          <td id="costPerNight">$${data.costPerNight}</td>
        </tr>`)
    })
  },

  addRoomBill(listOfRooms) {
    $('#js-customer-bookings-table').html('');
    listOfRooms.forEach(data => {
      $('#js-customer-bookings-table').append(
        `<tr>
          <td>${data.date}</td>
          <td>${data.roomNumber}</td>
        </tr>`)
    })
  },

  filterByRoomType(roomsAvail, type) {
    return roomsAvail.filter(room => room.roomType === type)
  },

  addRowsForMenu(listOfFood) {
    $('#js-menu-table').html('');
    listOfFood.forEach(data => {
      $('#js-menu-table').append(
        `<tr id="menu-${data.food}-${data.totalCost}">
          <td>${data.food}</td>
          <td>$${data.totalCost}</td>
          <td>Add</td>
        </tr>`)
    })
  },

}

export default domUpdates;