import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';

export default function Form() {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(data => data.json())
            .then(d => setData(d))
    }, [])

    const getLocalMovies = () => {
        let m = localStorage.getItem('movies')
        if (m) return JSON.parse(m)
        return []
    }
    const [movies, setMovies] = useState(getLocalMovies);
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);
    const handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            movie: data.name,
            name: event.target[0].value,
            email: event.target[1].value,
            tickets: event.target[2].value,
            date: event.target[3].value,
            time: event.target[4].value
        }
        setMovies(prev => [...prev, obj])
        setShowModal(true)
    }

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <Modal />}

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Movie : {data.name}</h2>
                    <h2>Name:</h2>
                    <input required type="text" name="username" />
                    <h2>Email:</h2>
                    <input required type="email" name="email" />
                    <h2>Number of Tickets:</h2>
                    <input required type="number" name="tickets" />
                    <h2>Date:</h2>
                    <input required type="date" name="date" />
                    <h2>Time:</h2>
                    <input required type="time" name="time" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
