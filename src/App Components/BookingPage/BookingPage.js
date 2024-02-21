import './BookingPage.css'
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
        <div className = "Bookingpage" style = {res_style}>
        </div>
    )
}

export default BookingPage;
