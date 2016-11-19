import React from 'react';
import vegas from 'vegas';


let images = [];
            
        for (let i of Array(9).keys()) {
            images.push({
                src: `img/pageSlidersOpt/${i + 1}LowRes.jpg`
            });
        }

export default class Vegas extends React.Component{
    componentDidMount() {

        $('body').vegas({
            slides: images,
            animation: 'kenburns'
            //transition: 'zoomIn'        
        });
    }
    render() {
        return (<span></span>);
    }
}

/*
//Not in use for Low Res
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
*/