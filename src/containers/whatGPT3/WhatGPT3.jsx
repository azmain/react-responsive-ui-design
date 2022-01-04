import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__padding' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature 
                    title="What is GPT-3" 
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.'/>
                <Feature title='Knowledgebase' text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.'/>
                <Feature title='Education' text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.'/>
            </div>
        </div>
    )
}

export default WhatGPT3
