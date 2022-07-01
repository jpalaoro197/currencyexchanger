import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';

function getElements (response, usd, selectedCurrency ) {
  if (response.conversion_rates) {
    const exchange = (usd / response.conversion_rates.USD);
    $("#rate").text(`${exchange} ${selectedCurrency}`);
  } else {
    $("#error").text(`error occured: ${response.error_type}`);
  }
}

async function callApi(selectedCurrency, usd) {
  const response = await CurrencyService.getConversion(selectedCurrency, usd);
  getElements(response, usd, selectedCurrency);
}

$(document).ready(function() {
  $('#currency-exchange').submit(function() {
    event.preventDefault();
    let selectedCurrency = $("#selected-currency").val();
    let usd = parseFloat($("#user-currency").val());
    callApi(selectedCurrency, usd);
    
    });
  });