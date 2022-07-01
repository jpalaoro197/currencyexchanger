import CurrencyService from `./currency-service.js`;

function getConversion (response) {
  if (response.conversion_rates) {
    $(`.rate`).text(`${response.conversion_rates}`);
  } else {
    $(`error`).text(`error occured: ${response.error_type}`)
  };
};

