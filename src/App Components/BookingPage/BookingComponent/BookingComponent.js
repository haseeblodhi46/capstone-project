import './BookingComponent.css'
import React, { useEffect, useState, useRef} from "react";


function BookingComponent() {

    const form_style = {
        display: 'grid',
        maxWidth: '200px',
        gap: 'auto'
    };

    var time_values = ['12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30'];
    var occasion_values = ['Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 'Other'];
    const makeOption = (X) => {
        return(<option value = {X}>{X}</option>)
    }

    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('12:00');
    const [guestsValue, setGuestsValue] = useState('1');
    const [occasionValue, setOccasionValue] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Date: ' + dateValue);
        console.log('Time: ' + timeValue);
        console.log('Guests: ' + guestsValue);
        console.log('Occasion: ' + occasionValue);
    };
    return (
        <div className = "BookingComponent">
            <form style={form_style} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose Date:</label>
                <input type="date" id="res-date" name="res-date" value={dateValue} onChange={e => setDateValue(e.target.value)}></input>
                <label htmlFor="res-time">Choose Time:</label>
                <select id="res-time" name="res-time" value={timeValue} onChange={e => setTimeValue(e.target.value)}>
                    {time_values.map(makeOption)}
                </select>
                <label htmlFor="res-guests">Number of guests:</label>
                <input type="number" id="res-guests" name="res-guests" placeholder='1' min="1" max="10"></input>
                <label htmlFor="res-occasion">Occasion:</label>
                <select id="res-occasion" name="res-occasion" value={occasionValue} onChange = {e => setOccasionValue(e.target.value)}>
                    {occasion_values.map(makeOption)}
                </select>
                <input type="submit" value="Make Your Reservation"></input>
            </form>
        </div>
    )
}

export default BookingComponent;