import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Standard extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/standard.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="standard" style={divStyle}></span>
                </div>
                <div className="standardHome">
                <Link to="#/home"><h1>Stratton-Violin</h1></Link>
                <h2>Standard</h2>
                </div>
            </div>    
        );
    }
}