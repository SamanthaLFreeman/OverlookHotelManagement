import $ from 'jquery';
import domUpdates from './dom-updates';
import './css/base.scss';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
$('#js-date').html(domUpdates.displayCurrentDate());

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
});