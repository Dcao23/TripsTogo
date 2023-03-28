const fetch = require('node-fetch');

const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search?adults_number=2&dest_id=-553173&locale=en-gb&checkin_date=2023-09-23&filter_by_currency=AED&room_number=1&order_by=popularity&units=metric&dest_type=city&checkout_date=2023-09-24&include_adjacency=true&children_number=2&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&page_number=0';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a8062aff99mshba51f71853c0255p18a7dfjsn8ac7f2a47081',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));