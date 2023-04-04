import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_TRIP } from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'
import { useParams } from "react-router";

const PlanTrip = () => {
    const { userId } = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    const { data } = useQuery(QUERY_ME)
    const [addTrip, { error }] = useMutation(CREATE_TRIP, {
        update(cache, { data: { addTrip } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });

                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { trips: [...me.trips, addTrip] } }
                })
            } catch (e) {
                console.error(e)
            }
        }
    })

    const creator = data?.me.username

    const handleChange = (e) => {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'description':
                setDescription(value)
                break;
            case 'location':
                setLocation(value)
                break;
            case 'image':
                setImage(value)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const { data } = await addTrip({
                variables: {
                    input: {
                        name,
                        location,
                        image,
                        description,
                        creator
                    }
                }
            })

            setName("")
            setDescription("")
            setLocation("")
            setImage("")

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <input
                type="text"
                name='name'
                value={name}
                placeholder="Name of trip"
                onChange={handleChange}
            />
            <textarea
                type="text"
                name='description'
                value={description}
                placeholder="Description"
                onChange={handleChange}
            />
            <input
                type="text"
                name='location'
                value={location}
                placeholder="Where are you going?"
                onChange={handleChange}
            />
            <input
                type="text"
                name='image'
                value={image}
                placeholder="Enter image URL"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add your trip!</button>
        </div>
    )
}

export default PlanTrip