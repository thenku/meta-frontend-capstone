import * as React from 'react';
import Card from './Card';

export default function SpecialsSection(props) {

    return (
        <section className="" style={{padding:"2rem 0"}}>
        <div className="sheet">
            <div className="flb" style={{padding: "6rem 0 2rem 0"}}>
                <h2 style={{fontSize:"2.5rem"}}>This week's specials!</h2>
                <a href="/" role="button">Online Menu</a>
            </div>
            <div className="cols3">
                <Card src="/icons_assets/greek_salad.jpg" title="Greek salad" price={12.99} descr="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
                <Card src="/icons_assets/bruchetta.jpg" title="Bruchetta" price={5.99} descr="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
                <Card src="/icons_assets/lemon_dessert.jpg" title="Lemon Dessert" price={"5.00"} descr="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
            </div>
        </div>
    </section>
    )
}