import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory,IndexRoute} from 'react-router';

import App from 'components/app';
import Home from 'components/Home/home';
import Violins from 'components/Violins/violins';
import Gypsy from 'components/Violins/gypsy';
import Standart from 'components/Violins/standart';
import KirilPetrov from 'components/Violins/kirilPetrov';
import SemiCustom from 'components/Violins/semiCustom';
import RobertKantor from 'components/Violins/robertKantor';
import Gallery from 'components/Gallery/gallery';
import ForSale from 'components/Sale/forSale';
import Contact from 'components/Contact/contact';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/"component={App}/>
        <IndexRoute component={Home}/>
        <Route path="gallery" component={Gallery}/>
        <Route path="violins/semiCustom" component={SemiCustom}/>
        <Route path="violins/standart" component={Standart}/>
        <Route path="violins/gypsy" component={Gypsy}/>
        <Route path="violins/kirilPetrov" component={KirilPetrov}/>
        <Route path="violins/robertKantor" component={RobertKantor}/>
        <Route path="forSale" component={ForSale}/>
        <Route path="contact" component={Contact}/>
    </Router>, app);