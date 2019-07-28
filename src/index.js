let hotel;

// let usersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
//   .then(response => response.json())

// let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
//   .then(response => response.json())

// let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
//   .then(response => response.json())

// let roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
//   .then(response => response.json())

import bookings from '../src/data/bookings-data';
import rooms from '../src/data/rooms-data';
import roomServices from '../src/data/roomServices-data';
import users from '../src/data/users-data';

// Promise.all([usersData, bookingsData, roomServiceData, roomsData])
//   .then(data => hotel = new Hotel(data[0].users, data[1].bookings, data[2].roomServices, data[3].rooms))
//   .catch(error => console.log(error))

import $ from 'jquery';
import domUpdates from './dom-updates';
import Hotel from '../src/Hotel'
import './css/base.scss';

// img link to it in the index.html
// import './images/turing-logo.png'
let today = domUpdates.findCurrentDate();
$('#js-date').html(domUpdates.displayCurrentDate());
$('#js-customer-name').html();

$('#js-username-btn').on('click', (e) => {
  hotel = new Hotel(users, bookings, roomServices, rooms)
  e.preventDefault();
  $('#js-login').hide();
  $('#js-main-content').show();
  $('.btn').attr('disabled', false);
  $('#js-main-btn').attr('disabled', true);
  $('#js-room-avail').html(hotel.calculateAvailableRoomsforToday(today));
  $('#js-today-total-rev').html(hotel.calculateTotalRevenueToday(today));
  $('#js-percent-occup').html(hotel.findPercentageRoomsOccupied(today));
});

$('#js-main-btn').on('click', () => {
  $('.content').hide();
  $('#js-main-content').show();
  $('.btn').attr('disabled', false);
  $('#js-main-btn').attr('disabled', true);
});

$('#js-orders-btn').on('click', () => {
  $('.content').hide();
  $('#js-orders-content').show();
  $('.btn').attr('disabled', false);
  $('#js-orders-btn').attr('disabled', true);
  hotel.createRoomServices();
  let ordersByDate = hotel.roomServices.findAllOrders(today)
  domUpdates.addRowsForAllOrders(ordersByDate);
});

$('#js-orders-date-btn').on('click', () => {
  let date = $('#js-input-orders-date').val();
  $('#js-all-orders-table').html('')
  hotel.createRoomServices();
  let ordersByDate = hotel.roomServices.findAllOrders(date);
  domUpdates.addRowsForAllOrders(ordersByDate);
});

$('#js-rooms-btn').on('click', () => {
  $('.content').hide();
  $('#js-rooms-content').show();
  $('.btn').attr('disabled', false);
  $('#js-rooms-btn').attr('disabled', true);
});

$('#js-customer-btn').on('click', () => {
  $('.content').hide();
  $('#js-customer-content').show();
  $('.btn').attr('disabled', false);
  $('#js-customer-btn').attr('disabled', true);
  domUpdates.addCustomersList(hotel.usersData);
});

$('#js-input-customer-existing').on('input', () => {
  let searchTextField = $('#js-input-customer-existing').val().toLowerCase();
  let customers = hotel.usersData;
  let results = customers.filter(customer => {
    return customer.name.toLowerCase().includes(searchTextField);
  })
  $('.customers-list').html('');
  results.forEach(customer => {
    domUpdates.addFoundCustomer(customer);
  })
});

$('#js-customers-list').on('click', (e) => {
  let pickedCustomer = e.target;
  let foundName = $(`#${pickedCustomer.id}`).html()
  domUpdates.clickOnUser(pickedCustomer);
  hotel.createCustomer(foundName);
});

$('#js-new-customer-btn').on('click', (e) => {
  e.preventDefault();
  let newName = $('#js-input-customer-new').val();
  hotel.createNewCustomer(newName);
  $('#js-customer-name').html(newName);
  $('#js-input-customer-new').val('');
});