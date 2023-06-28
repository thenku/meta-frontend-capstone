import * as React from 'react';

export default function Card({src, title, price, descr}) {

    return (<>
        <article className="card1">
            <img src={src} alt={src}/>
           <div className="content">
            <div className="flb" style={{}}>
                    <h3 className="">{title}</h3>
                    <h3 className="price">${price}</h3>
                </div>
                <p style={{padding: "1rem 0"}}>
                    {descr}
                </p>
                <h3 style={{padding: "1rem 0"}}>
                    Order a delivery 🛵
                </h3>
           </div>
        </article> 
    </>
    )
}