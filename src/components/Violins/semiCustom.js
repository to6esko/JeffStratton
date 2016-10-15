import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class SemiCustom extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/semiCus1.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="semi"></span>
                    <span className="semiBack" style={divStyles}></span>
                </div>
                <div className="semiHome">
                    <Link to="#/home"><Home/></Link>
                    </div>
                <div className="semiContent">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Semi - Custom  Body</h3>
                    <p className="name">
                        These Bodies are hand carved and detailed.... not a <br/>
                        one is exactly the same.
                    </p>
                    <p className="name">
                        Check aut the Gallery page for some crazy ideas....
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
                    <h3 className="price2">4 String $2800.00 &nbsp;&nbsp; 5 String $3000.00</h3>
                </div>
            </div>
        );
    }
}