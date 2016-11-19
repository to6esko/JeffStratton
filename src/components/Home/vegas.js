import React from 'react';
import vegas from 'vegas';
import BrowserUtil from 'lib/BrowserUtil';


export default class Vegas extends React.Component{
    componentDidMount() {  
        const browserUtil = new BrowserUtil();

        let images = [];
            
        for (let i of Array(9).keys()) {
            images.push({
                src: `img/pageSlidersOpt/${i + 1}.jpg`
            });
        }

        const convertedImages = images.map(image => {
            image.src = browserUtil.convertImagePath(image.src);

            return image;
        });        

        $('body').vegas({
            slides: convertedImages,
            animation: 'kenburns'
            //transition: 'zoomIn'        
        });
    }
    
    render() {
        return (<span></span>);
    }
}