import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class ForSale extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../pages/forSale.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="contact" style={divStyle}></span>
                </div>
                <div className="contactHome">
                <Link to="#/home"><h1>Stratton-Violin</h1></Link>
                <h2>For Sale</h2>
                </div>
            </div>    
        );
    }
}