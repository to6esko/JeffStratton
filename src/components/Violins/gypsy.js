import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Gypsy extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/back2.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="gypsy" style={divStyle}></span>
                </div>
                <div className="gypsyHome">
                    <Link to="#/home"><Home/></Link>
                    <h2>Gypsy</h2>
                </div>
            </div>
        );
    }
}