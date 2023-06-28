import * as React from 'react';
import Nav from './Nav';

export default function Header(props) {

    return (
        <header>
            <div className="sheet">
                <div className="lcontainer">
                    <img src="/logo.png" alt="logo"/>
                </div>
                <Nav/>
            </div>
        </header>
    )
}