import * as React from 'react';

export default function HeroSection(props) {

    return (
        <section className="bg1" style={{padding:"2rem 0"}}>
        <div className="sheet" style={{display:"flex"}}>
        <div className="flb">
                <div style={{maxWidth:500}}>
                    <h1>Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <h3 className="leadtext">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                    <a href="/booking" role="button" className="button">
                        Reserve a Table
                    </a>
                </div>
            <div className="headerImg">
                <img src="/icons_assets/restauranfood.jpg" alt="food" style={{width: "100%", aspectRatio:1, objectFit: "cover", maxWidth:500}}/>
            </div>
        </div>
        </div>
    </section>
    )
}