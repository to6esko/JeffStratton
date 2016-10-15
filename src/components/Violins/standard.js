import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Standard extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/standard.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="standard"></span>
                    <span className="standardBack" style={divStyles}></span>
                </div>
                <div className="standardHome">
                <Link to="#/home"><Home/></Link>
                </div>
                <div className="standardContent">
                    <h3 className="price1">The</h3>
                    <h3 className="price">Standard  Body</h3>
                    <p className="name">
                        This is the production
                    </p>
                    <p className="name">
                        Check aut the Gallery page for some crazy ideas....
                    </p>
                    <div className="text">
                        <br/>
                        <p>Solid wood Body</p>
                        <p>Hand carved maple neck</p>
                        <p>Ebony finger board</p>
                        <p>Ebony pegs and chinrest</p>
                        <p>Solid brass "Stratton Violin" hardware</p>
                        <p>Your choice of 4 or 5 string</p>
                        <p>Barbera twin hybrid bridge</p>
                        <br/>
                    </div>
                    <h3 className="price1">4 String $2800.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 String $3000.00</h3>
                </div>
            </div>    
        );
    }
}