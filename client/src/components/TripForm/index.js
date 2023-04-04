import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_TRIP } from '../../utils/mutations';
import { QUERY_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';

const TripForm = () => {
  const [tripName, setTripName] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('')
  const [characterCount, setCharacterCount] = useState(0);

  const [createTrip, { error }] = useMutation(CREATE_TRIP, {
    update(cache, { data: { createTrip } }) {
      try {
        const { trips } = cache.readQuery({ query: QUERY_TRIPS });

        cache.writeQuery({
          query: QUERY_TRIPS,
          data: { trips: [createTrip, ...trips] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createTrip({
        variables: {
          tripName,
          tripCreator: Auth.getProfile().data.username,
          tripDescription,
          location,
          image,
        },
      });
      setTripName('');
      setTripDescription('');
      setLocation('');
      setImage('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'tripName' && value.length <= 100) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
    if (name === 'tripDescription' && value.length <= 250) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
    if (name === 'location' && value.length <= 100) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
    if (name === 'image') {
      setThoughtText(value);
    }
  };

  return (
  <div>
  <h3>What's on your techy mind?</h3>

  {Auth.loggedIn() ? (
    <>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
            <label for='tripName'>Title</label><br></br>
            <input name='tripName' id='trip-name' onInput={handleChange}></input>
            <br></br>
            
            <label for='tripDescription'>Write a brief description about your trip experience.</label><br></br>
            <input name='tripDescription' id='trip-desc' onInput={handleChange}></input>
            <br></br>
            <label for='location'>Name of trip destination</label><br></br>
            <input name='location' id='trip-location' onInput={handleChange}></input>
            <br></br>
            <label for='image'>Pictures from your trip</label><br></br>
            <input type='image' name='image' id='trip-img' onInput={handleChange}></input>
            <br></br>



        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Create New Trip
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            {error.message}
          </div>
        )}
      </form>
    </>
  ) : (
    <p>
      You need to be logged in to Create a Trip. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
  )}
</div>
);
};

export default TripForm;