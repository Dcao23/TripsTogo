const { Schema, model } = require('mongoose');

const TripsSchema = new Schema({
    flight: [
        {
            startDate: {
                type: String,
                required: true,
            },
            endDate: {
                type: String,
                required: true,
            },
            origin: {
                type: String,
                required: true,
            },
            destination: {
                type: String,
                required: true,
            },
        },
    ],
    hotel: [
        {
          name: {
            type: String,
            required: true,            
          },
          checkInDate: {
            type: String,
            required: true,
          },
          checkOutDate: {
            type: String,
            required: true,
          }  
        },
    ],

})