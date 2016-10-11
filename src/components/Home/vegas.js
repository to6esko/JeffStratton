import React from 'react';
import vegas from 'vegas';

export default class Vegas extends React.Component{
    componentDidMount() {  
        $('body').vegas({
            slides: [
                {
                    src:'pageSliders/opt1.jpg'
                },
                {
                    src:'pageSliders/opt2.jpg'
                },
                {
                    src:'pageSliders/opt3.jpg'
                },
                {
                    src:'pageSliders/opt4.jpg'
                },
                {
                    src:'pageSliders/opt5.jpg'
                },
                {
                    src:'pageSliders/opt6.jpg'
                },
                {
                    src:'pageSliders/opt7.jpg'
                },
                {
                    src:'pageSliders/opt8.jpg'
                },
                {
                    src:'pageSliders/opt9.jpg'
                }
            ],
            //animation: 'kenburns'
            transition: 'zoomIn'        
        });
    }
    
    render() {
        return (<span ></span>);
    }
}