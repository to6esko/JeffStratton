import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Contact extends React.Component{
    render() {
        return (
            <div>
                <Link to="#/home"><h1>StrattonViolin</h1></Link>
                <h2>Contact</h2>
            </div>
        );
    }
}