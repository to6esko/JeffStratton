import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';

import Home from 'components/Home/home';
import Violins from 'components/Violins/violins';
import Gypsy from 'components/Violins/gypsy';
import Standart from 'components/Violins/standart';
import KirilPetrov from 'components/Violins/kirilPetrov';
import SemiCustom from 'components/Violins/semiCustom';
import RobertKantor from 'components/Violins/robertKantor';
import Gallery from 'components/Gallery/gallery';
import ForSale from 'components/Sale/forSale';
import Contact from 'components/Contact/contact';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <Home/>
                <Violins/>
                <ul>
                    <li><Link to="/violins/semiCustom">SemiCustom</Link></li>
                    <li><Link to="/violins/standart">Standart</Link></li>
                    <li><Link to="/violins/gypsy">Gypsy</Link></li>
                    <li><Link to="/violins/kirilPetrov">KirilPetrov</Link></li>
                    <li><Link to="/violins/robertKantor">RobertKantor</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/forSale">ForSale</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}