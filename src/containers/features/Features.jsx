import React from 'react';
import { Feature } from '../../components';
import './feature.css';

const featuresData = [
    {
        title: 'Improving and distrusts instantly',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        title: 'Improving and distrusts instantly',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        title: 'Become the tended active',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        title: 'Really boy law county',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
];

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id="feature">
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                    
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {
                    featuresData.map((item, index) => (
                        <Feature key={item.title + index}
                            title={item.title} 
                            text={item.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Features
