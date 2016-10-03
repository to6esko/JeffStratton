import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';

import Home from 'components/home';
import Violins from 'components/violins';
import Gallery from 'components/gallery';
import ForSale from 'components/forSale';
import Contact from 'components/contact';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <Home/>
                <ul>
                    <li><Link to="/violins">Violins</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/forSale">ForSale</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}