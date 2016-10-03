import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';

import Home from 'components/Home/home';
import Violins from 'components/Violins/violins';
import Gallery from 'components/Gallery/gallery';
import ForSale from 'components/Sale/forSale';
import Contact from 'components/Contact/contact';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <div>
                   <Home/>
                </div>
                <div>
                <Violins/>
                </div>
                <div>
                <ul>
                    <li><Link to="/gallery"><h2>Gallery</h2></Link></li>
                    <li><Link to="/forSale"><h2>ForSale</h2></Link></li>
                    <li><Link to="/contact"><h2>Contact</h2></Link></li>
                </ul>
                {this.props.children}
                </div>
            </div>
        );
    }
}