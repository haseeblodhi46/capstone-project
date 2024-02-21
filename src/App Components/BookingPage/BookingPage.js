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

    return (
        <div className = "BookingPage" style = {res_style}>
            <BookingComponent />
        </div>
    )
}

export default BookingPage;
