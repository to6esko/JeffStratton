import React from 'react';
import vegas from 'vegas';

export default class Vegas extends React.Component{
    componentDidMount() {  
        $('body').vegas({
            slides: [
                {
                    src:'pageSliders/1.jpg'
                },
                {
                    src:'pageSliders/2.jpg'
                },
                {
                    src:'pageSliders/3.jpg'
                },
                {
                    src:'pageSliders/4.jpg'
                },
                {
                    src:'pageSliders/5.jpg'
                },
                {
                    src:'pageSliders/6.jpg'
                },
                {
                    src:'pageSliders/7.jpg'
                },
                {
                    src:'pageSliders/8.jpg'
                },
                {
                    src:'pageSliders/9.jpg'
                }
            ],
            animation: 'kenburns'
            //transition: 'zoomIn'        
        });
    }
    
    render() {
        return (<span></span>);
    }
}