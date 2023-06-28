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
          <copyright>
              &copy;Copyright Little Lemon {new Date().getFullYear()}
          </copyright>
        </div>
       </footer>
    </>
    )
}