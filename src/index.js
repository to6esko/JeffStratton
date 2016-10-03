import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import App from 'components/app';
import Violins from 'components/violins';
import Gallery from 'components/gallery';
import ForSale from 'components/forSale';
import Contact from 'components/contact';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/"component={App}/>
        <Route path="gallery" component={Gallery}/>
        <Route path="violins" component={Violins}/>
        <Route path="forSale" component={ForSale}/>
        <Route path="contact" component={Contact}/>
    </Router>, app);