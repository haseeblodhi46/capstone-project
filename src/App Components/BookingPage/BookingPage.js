import './BookingPage.css'
import BookingComponent from './BookingComponent/BookingComponent.js';
import React, { useEffect, useState, useRef, useReducer} from "react";
import {fetchAPI, submitAPI} from 'assets/api_hooks/mockAPI.js'

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

    const [dateValue, setDateValue] = useState(new Date());


    useEffect(() => {
        let date = dateValue.toISOString().split('T')[0];
        fetchAPI(date).then((data) => {
            console.log('API Data: ' + data);
            dispatch({type: 'DATE_SELECTION', payload: data});
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }, [dateValue]);


    const initializeTimes = () => {
        let times = [];
        return times;
    }

    const updateAvailableTimes = (state, action) => {
        if (action.type === 'AFTER_SUBMISSION') {
            const updatedTimes = state.filter(time => time !== action.payload);
            return updatedTimes;
        }
        else if (action.type === 'DATE_SELECTION'){
            console.log('Available Times: ' + action.payload);
            return action.payload;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateAvailableTimes, initializeTimes());

    return (
        <div className = "BookingPage" style = {res_style}>
            <BookingComponent
            availableTimes = {availableTimes}
            dispatch = {dispatch}
            dateValue = {dateValue}
            setDateValue = {setDateValue}
            />
        </div>
    )
}

export default BookingPage;
