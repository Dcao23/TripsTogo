import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
  params: {
    adults_number: '2',
    dest_id: '-553173',
    locale: 'en-gb',
    checkin_date: '2023-09-23',
    filter_by_currency: 'AED',
    room_number: '1',
    order_by: 'popularity',
    units: 'metric',
    dest_type: 'city',
    checkout_date: '2023-09-24',
    include_adjacency: 'true',
    children_number: '2',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1',
    children_ages: '5,0',
    page_number: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'a8062aff99mshba51f71853c0255p18a7dfjsn8ac7f2a47081',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});