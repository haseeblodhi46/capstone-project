import './ConfirmationPage.css'
import React, { useEffect, useState, useRef, useReducer} from "react";

function ConfirmationPage() {

    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        let nav = document.querySelector('.Nav');
        setNavHeight(nav.clientHeight);
    }, [navHeight]);
    const res_style = {
        position: 'relative',
        top: navHeight+'px',
    }


    return (
        <div className = "ConfirmationPage" style = {res_style}>
            <h1>Thank you for your reservation!</h1>
            <p>Your reservation is confirmed. We look forward to seeing you soon!</p>
        </div>
    )
}

export default ConfirmationPage;
