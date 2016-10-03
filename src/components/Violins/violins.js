import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';
import Gypsy from 'components/Violins/gypsy';
import Standart from 'components/Violins/standart';
import KirilPetrov from 'components/Violins/kirilPetrov';
import SemiCustom from 'components/Violins/semiCustom';
import RobertKantor from 'components/Violins/robertKantor';

export default class Violins extends React.Component{
    render() {
        return (
            <div>
                <h2>Violins</h2>
                <ul>
                <li><Link to="/violins/semiCustom">SemiCustom</Link></li>
                    <li><Link to="/violins/standart">Standart</Link></li>
                    <li><Link to="/violins/gypsy">Gypsy</Link></li>
                    <li><Link to="/violins/kirilPetrov">KirilPetrov</Link></li>
                    <li><Link to="/violins/robertKantor">RobertKantor</Link></li>
                </ul>
            </div>
        );
    }
}