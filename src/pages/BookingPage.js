import * as React from 'react';
import BookingForm from '../components/BookingForm';

export default function BookingPage(props) {

    return (
       <>
         <section className="bg1" style={{padding:"6rem 0"}}>
            <div className="sheet flc">
               <h1>Booking Page</h1>
            </div>
         </section>

         <section>
            <div className="sheet flc" style={{padding:32}}>
               <BookingForm />
            </div>
         </section>
       </>
    )
}



{/*  */}