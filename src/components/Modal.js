import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Modal({ useShowModal, inputRef }) {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    return (<>
        <div className='blurry_bg'></div>
        <div className="modal_container">
            <h1>Form Submitted</h1>
            <h2 className='modelMidSentence'>We will contact you very soon!</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='modalBtn'><Link to={'/'}>Home</Link></button>
                <button className='modalBtn'><Link to={'/booking'}>Bookings</Link></button>
            </div>
        </div>
    </>
    )
}
