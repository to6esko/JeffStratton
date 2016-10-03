import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory,IndexRoute} from 'react-router';

import App from 'components/app';
import Home from 'components/home';
import Violins from 'components/violins';
import Gallery from 'components/gallery';
import ForSale from 'components/forSale';
import Contact from 'components/contact';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/"component={App}/>
        <IndexRoute component={Home}/>
        <Route path="gallery" component={Gallery}/>
        <Route path="violins" component={Violins}/>
        <Route path="forSale" component={ForSale}/>
        <Route path="contact" component={Contact}/>
    </Router>, app);