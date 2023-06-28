import * as React from 'react';
import Header from './Header';

export default function Layout(props) {

    return (<>
       <Header />
       <main>
           {props.children}
       </main>
       <footer>
        <div className="flc sheet" style={{padding: "1rem"}}>
          <small>
              &copy; Copyright Little Lemon {new Date().getFullYear()}
          </small>
        </div>
       </footer>
    </>
    )
}