import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class RobertKantor extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/kantorModel.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="kantor" style={divStyle}></span>
                </div>
                <div className="kantorHome">
                    <Link to="#/home"><h1>Strattons-Violin</h1></Link>
                    <h2>Robert Kantor</h2>
                </div>
            </div>
        );
    }
}