import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { BoookingTimesContext } from '../App';
import API from '../util/api';


export default function BookingForm(props) {
    const {availableTimes, setAvailableTimes} = React.useContext(BoookingTimesContext);
    const navigate = useNavigate()

    const [time, setTime] = React.useState("");
    let [date, setDate] = React.useState("");
    let [occasion, setOccasion] = React.useState("");
    let [guests, setGuests] = React.useState("");

    function handleDateChange(o) {
        const v = o.currentTarget.value;
        setDate(v);
        setAvailableTimes(v);
    }
    function handleSubmit(e){
        e.preventDefault();
        const submitted = API.submitAPI(new FormData(e.currentTarget));
        if(submitted){
            navigate('/booking-confirmed')
        }
    }

    return (
        <form style={{display:"grid", maxWidth:200, gap:20}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(v)=>setTime(v.currentTarget.value)}>
                {availableTimes.map((t)=> <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(v)=>setGuests(v.currentTarget.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(v)=>setOccasion(v.currentTarget.value)}>
               <option>Birthday</option>
               <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" role="button" className="button"/>
         </form>
    )
}

