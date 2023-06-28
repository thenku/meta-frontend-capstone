import * as React from 'react';

export default function Home(props) {

    return (
        <>
            <section className="bg1" style={{padding:"2rem 0"}}>
            <div className="sheet" style={{display:"flex"}}>
               <div className="">
                <h1>Little Lemon</h1>
                        <h2 className="subtitle">Chicago</h2>
                        <h3 className="leadtext">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                        <a href="/booking" role="button" className="button">
                            Reserve a Table
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/icons_assets/restauranfood.jpg" alt="food" style={{width: 200, height:200, objectFit: "cover"}}/>
                </div>
            </section>
            <section className="" style={{padding:"2rem 0"}}>
            <div className="sheet">
                <div className="flb">
                    <h2 style={{fontSize:"2.5rem"}}>This week's specials!</h2>
                    <a href="#" role="button">Online Menu</a>
                </div>
                   
                </div>
            </section>
        </>
    )
}