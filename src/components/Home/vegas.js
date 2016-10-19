import React from 'react';
import vegas from 'vegas';

export default class Vegas extends React.Component{
    componentDidMount() {  
        $('body').vegas({
            slides: [
                {
                    src:'img/pageSliders/1.jpg'
                },
                {
                    src:'img/pageSliders/2.jpg'
                },
                {
                    src:'img/pageSliders/3.jpg'
                },
                {
                    src:'img/pageSliders/4.jpg'
                },
                {
                    src:'img/pageSliders/5.jpg'
                },
                {
                    src:'img/pageSliders/6.jpg'
                },
                {
                    src:'img/pageSliders/7.jpg'
                },
                {
                    src:'img/pageSliders/8.jpg'
                },
                {
                    src:'img/pageSliders/9.jpg'
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