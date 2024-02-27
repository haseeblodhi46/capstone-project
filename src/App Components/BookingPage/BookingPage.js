import './BookingPage.css'
import BookingComponent from './BookingComponent/BookingComponent.js';
import React, { useEffect, useState, useRef} from "react";


function BookingPage() {

    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        let nav = document.querySelector('.Nav');
        setNavHeight(nav.clientHeight);
        console.log(navHeight);
    }, [navHeight]);
    const res_style = {
        position: 'relative',
        top: navHeight+'px',
    }

    const [availableTimes, setAvailableTimes] = useState(['12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30']);

    return (
        <div className = "BookingPage" style = {res_style}>
            <BookingComponent />
        </div>
    )
}

export default BookingPage;
