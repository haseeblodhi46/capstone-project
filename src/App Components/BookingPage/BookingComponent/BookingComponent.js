import './BookingComponent.css';
import React, { useEffect, useState, useRef} from "react";
import { DatePicker_FlowBite } from 'flowbite-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './custom-datepicker.css';


function BookingComponent(props) {


    var occasion_values = ['Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 'Other'];
    const makeOption = (X) => {
        return(<option value = {X}>{X}</option>)
    }

    const [dateValue, setDateValue] = useState(null);
    const [timeValue, setTimeValue] = useState('12:00');
    const [guestsValue, setGuestsValue] = useState('1');
    const [occasionValue, setOccasionValue] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Date: ' + dateValue);
        console.log('Time: ' + timeValue);
        console.log('Guests: ' + guestsValue);
        console.log('Occasion: ' + occasionValue);
        setDateValue('');
        setTimeValue('12:00');
        setGuestsValue('1');
        setOccasionValue('Birthday');
        props.dispatch({type: 'AFTER_SUBMISSION', payload: timeValue});
    };

const changeDateFormat = (date) => {
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let newDateFormat = year + '-' + month + '-' + day;
    return newDateFormat;
}
    return (
        <div className = "BookingComponent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose Date:</label>
                {/*<input  type="date" className="dateClass" id="res-date" name="res-date" value={dateValue} onChange={e => setDateValue(e.target.value)}></input>*/}
                <DatePicker
                selected={dateValue}
                onChange={date => { setDateValue(date);
                                    console.log(date);
                                    props.dispatch({type: 'DATE_SELECTION', payload: date});
                                  }}
                id='res-date'
                popperPlacement='bottom'
                placeholderText='Select Date'
                className='datepickerinput'/>
                <label htmlFor="res-time">Choose Time:</label>
                <select id="res-time" name="res-time" value={timeValue} onChange={e => setTimeValue(e.target.value)}>
                    {props.availableTimes.map(makeOption)}
                </select>
                <label htmlFor="res-guests">Number of guests:</label>
                <input type="number" id="res-guests" name="res-guests" placeholder='1' min="1" max="10" value={guestsValue} onChange={e => setGuestsValue(e.target.value)}></input>
                <label htmlFor="res-occasion">Occasion:</label>
                <select id="res-occasion" name="res-occasion" value={occasionValue} onChange = {e => setOccasionValue(e.target.value)}>
                    {occasion_values.map(makeOption)}
                </select>
                <input type="submit" className='submitButton' value="Make Your Reservation"></input>
            </form>
        </div>
    )
}

export default BookingComponent;