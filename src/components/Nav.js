import * as React from 'react';

export default function Nav(props) {

    return (
            <nav>
                <ul>
                    <a href="/">
                        <li>
                            Home
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            About
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            Menu
                        </li>
                    </a>
                    <a href="/booking">
                        <li>
                            Reservations
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            Order Online
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            Login
                        </li>
                    </a>
                    <a href="/booking">
                        <li>
                            Booking
                        </li>
                    </a>
                </ul>
            </nav>
    )
}