import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class SemiCustom extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/semiCus1.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="semi" style={divStyle}></span>
                </div>
                <div className="semiHome">
                    <Link to="#/home"><Home/></Link>
                    <h2>Semi Custom</h2>
                </div>
            </div>
        );
    }
}