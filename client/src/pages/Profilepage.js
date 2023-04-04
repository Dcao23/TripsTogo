import React from "react";
import { useQuery } from '@apollo/client'
import { Header } from "../components/header";
import "../assets/css/home.css";
import { InfoBox } from "../components/Homepage/Infobox";
import { QUERY_ME } from '../utils/queries'
import { Link } from "react-router-dom";

const Profilepage = () => {
    const { loading, data } = useQuery(QUERY_ME)
    console.log(data)
    const user = data?.me || {};
    const trips = user.trips || []
    const hasTrips = trips.length !== 0

    return (
        <div className="Home">
            <h1>Welcome to your profile page, {user.username}!</h1>
            {loading ? <h1>Loading...</h1> : (
                <>
                    <h2>{hasTrips ? "Below are your trips!" : "Add trips!"}</h2>
                    <div className="boxes-wrapper common_width">
                        {trips.map(trip => (
                            <InfoBox
                                title={`${trip.name} - ${trip.location} by ${trip.creator}`}
                                img={trip.image}
                                description={trip.description || "Fun trip!"}
                            />))}
                    </div>
                </>)}
            <Link to='/addTrip/'><button>Add trip!</button></Link>
        </div>
    );
};

export default Profilepage;