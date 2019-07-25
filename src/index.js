let usersRepo;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(usersData => {
    usersRepo = new UsersRepo(usersData);
  })
  .catch(error => console.log(error))

import $ from 'jquery';
import domUpdates from './dom-updates';
import './css/base.scss';
import UsersRepo from './Users-repo';

// img link to it in the index.html
// import './images/turing-logo.png'
$('#js-date').html(domUpdates.displayCurrentDate());
$('#js-customer-name').html();

$('#js-main-btn').on('click', () => {
  $('.content').hide();
  $('#js-main-content').show();
});

$('#js-orders-btn').on('click', () => {
  $('.content').hide();
  $('#js-orders-content').show();
});

$('#js-rooms-btn').on('click', () => {
  $('.content').hide();
  $('#js-rooms-content').show();
});

$('#js-customer-btn').on('click', () => {
  $('.content').hide();
  $('#js-customer-content').show();
  console.log(usersRepo);
});