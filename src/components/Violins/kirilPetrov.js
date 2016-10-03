import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class KirilPetrov extends React.Component{
    render() {
        return (
            <div>
                <Link to="#/home"><h1>StrattonViolin</h1></Link>
                <h2>Kiril Petrov</h2>
            </div>
        );
    }
}