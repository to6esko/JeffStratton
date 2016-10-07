import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Contact extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../pages/contactLinks.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="forSale" style={divStyle}></span>
                </div>
                <div className="forSaleHome">
                <Link to="#/home"><h1>Stratton-Violin</h1></Link>
                <h2>Contact</h2>
                </div>
            </div>    
        );
    }
}