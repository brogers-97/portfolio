import './projects.css'
import ImageGallery from 'react-image-gallery'
import React from 'react'

export default function ProjectFour(){
    

    class MyGallery extends React.Component {
        render() {
            const images = [
                {
                    original: '/assets/SS1.png'
                },
                {
                    original: '/assets/SS2.png'
                },
                {
                    original:'/assets/SS3.png'
                }
        
            ]
            return <ImageGallery 
                items={images} 
                showFullscreenButton={false}
                showPlayButton={false}
            />
        }
    }

    const Tooltip = ({ children, text }) => (
        <div className="tooltip-container">
          {children}
          <span className="tooltip-text">{text}</span>
        </div>
      );

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>SimuStock</h1>
                <p><a href="https://github.com/brogers-97/project-4-client" target="_blank" rel="noopener noreferrer">Source Code</a></p>
                <p><Tooltip text="currently not deployed :(">View Page</Tooltip></p>
            </div>
            <div className="project-info">
                <div className='gallery-container'>
                    <MyGallery />
                </div>
                <div className='tech-div'>
                    <h2>Technology Used</h2>
                <div className='tech-used'>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Python</p>
                    <p>SQL</p>
                    <p>Beautiful soup</p>
                    <p>TradingView Plugin</p>
                    <p>HTML</p>
                    <p>CSS3</p>
                </div>
                </div>
            </div>
            <div className='project-summary'>
                <h2>Summary</h2>
                <div>
                This was my first attempt to making a Django application! Me and my partner went with a mobile first design to create a replica of popular social media applications. We both worked 
                in finaces and had a passion in trading so we decided to create this program. It uses accurate up to date stock market data and allows the user to buy and sell stocks in whatever
                stock they are intersted in. We got the data by literally scraping trading website using "beautiful soup" with Python. We created a function that would shave down all the HTML data 
                into the appropriate bite sizes. Now that we have access to accurate stock prices we created the algorithim that would calculate the users gains or losses. We stored the original stock prices
                and the shares that the user purchased. Everytime the user clicked on their stock it would trigger the function that instantly calculated their gain based off of the new current stock prices.
                This project was amazing and is such a practical application to the real world.
                </div>
            </div>
        </div>
    )
}