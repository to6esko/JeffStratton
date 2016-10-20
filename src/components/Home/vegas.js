import React from 'react';
import vegas from 'vegas';

export default class Vegas extends React.Component{
    componentDidMount() {  
        $('body').vegas({
            slides: [
                {
                    src:'img/pageSlidersOpt/1.jpg'
                },
                {
                    src:'img/pageSlidersOpt/2.jpg'
                },
                {
                    src:'img/pageSlidersOpt/3.jpg'
                },
                {
                    src:'img/pageSlidersOpt/4.jpg'
                },
                {
                    src:'img/pageSlidersOpt/5.jpg'
                },
                {
                    src:'img/pageSlidersOpt/6.jpg'
                },
                {
                    src:'img/pageSlidersOpt/7.jpg'
                },
                {
                    src:'img/pageSlidersOpt/8.jpg'
                },
                {
                    src:'img/pageSlidersOpt/9.jpg'
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