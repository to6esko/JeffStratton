import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Standart extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/standard.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="standart" style={divStyle}></span>
                </div>
                <div className="standartHome">
                <Link to="#/home"><h1>Stratton-Violin</h1></Link>
                <h2>Standart</h2>
                </div>
            </div>    
        );
    }
}