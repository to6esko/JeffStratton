import React from 'react';

import Violins from 'components/violins';
import Gallery from 'components/gallery';
import ForSale from 'components/forSale';
import Contact from 'components/contact';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <h1>StrattonViolin</h1>
                <Violins/>
                <Gallery/>
                <ForSale/>
                <Contact/>
            </div>
        );
    }
}