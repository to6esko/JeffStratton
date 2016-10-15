import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Gypsy extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/back2.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="gypsy"></span>
                    <span className="gypsyBack" style={divStyles}></span>
                </div>
                <div className="gypsyHome">
                    <Link to="#/home"><Home/></Link>
                    </div>
                <div className="gypsyContent">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Gypsy Body</h3>
                    <p className="name">
                        A Clasik Violin Body with an edje.
                    </p>
                    <p className="name">
                        Hand carved and distvessed for the old <br/>vistick look.
                    </p>
                    <div className="text">
                        <p>Solid wood Body</p>
                        <p>Hand carved maple neck</p>
                        <p>Ebony finger board</p>
                        <p>Ebony pegs and chinrest</p>
                        <p>Solid brass "Stratton Violin" hardware</p>
                        <p>Your choice of 4 or 5 string</p>
                        <p>Barbera twin hybrid bridge</p>
                    </div>
                    <h3 className="price2">4 String $2200.00 &nbsp;&nbsp;&nbsp; 5 String $2400.00</h3>
                </div>
            </div>
        );
    }
}