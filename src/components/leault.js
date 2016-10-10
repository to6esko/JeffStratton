import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';

import Home from 'components/Home/home';
import Violins from 'components/Violins/violins';
import Gallery from 'components/Gallery/gallery';
import ForSale from 'components/Sale/forSale';
import Contact from 'components/Contact/contact';

export default class Leault extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <Violins/>
                <div className="container_links">
                    <ul>
                        <li><Link to="/gallery"><h2>Gallery</h2></Link></li>
                        <li><Link to="/forSale"><h2>For Sale</h2></Link></li>
                        <li><Link to="/contact"><h2>Contact</h2></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}