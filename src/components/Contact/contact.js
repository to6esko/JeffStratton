import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Contact extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../pages/contactLinks.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="contact" style={divStyle}></span>
                </div>
                <div className="contactHome">
                    <Link to="#/home"><h1>Stratton-Violin</h1></Link>
                    <h2>Contact</h2>
                    <div>
                        <h2>Links</h2>
                    </div>
                    <div>
                        <h2>Contact</h2>
                    </div>
                    <div>
                        <h2>Social</h2>
                    </div>
                </div>
            </div>
        );
    }
}