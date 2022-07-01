import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js'

function getConversion (response, usd, ) {
  if (response.conversion_rates) {
    $(".rate").text(`${response.conversion_rates}`);
  } else {
    $(".error").text(`error occured: ${response.error_type}`)
  }
}

$(document).ready(function() {
  $('#currency-exchange').submit(function() {
    const currency = $('#user-currency').val
    $('#user-currency').val
    CurrencyService.getExchange();
    .then(function(response) {
      getConversion(response);
    });
  });
});