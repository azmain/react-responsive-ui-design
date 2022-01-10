import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt='possibility' />

            </div>
            <div className='gpt3__possibility-content'>
                <h4>
                    Request Early Access to Get Started
                </h4>
                <h1 className='gradient__text'>
                    The possibilities are beyond our imagination
                </h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
