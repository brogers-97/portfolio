import './projects.css'
import ImageGallery from 'react-image-gallery'
import React from 'react'

export default function ProjectThree(){
    

    class MyGallery extends React.Component {
        render() {
            const images = [
                {
                    original: '/assets/JJwindow.png'
                },
                {
                    original: '/assets/JJwindow1.png'
                },
                {
                    original: '/assets/JJwindow2.png'
                },
                {
                    original: '/assets/JJwindow3.png'
                },
        
            ]
            return <ImageGallery 
                items={images} 
                showFullscreenButton={false}
                showPlayButton={false}
            />
        }
    }

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>Joystick Junkies</h1>
                <p><a href="https://github.com/brogers-97/project3client" target="_blank" rel="noopener noreferrer">Source Code</a></p>
                <p><a href="https://main--playful-arithmetic-40d56a.netlify.app/" target="_blank" rel="noopener noreferrer">View Page</a></p>
            </div>
            <div className="project-info">
                <div className='gallery-container'>
                    <MyGallery />
                </div>
                <div className='tech-div'>
                    <h2>Technology used</h2>
                <div className='tech-used'>
                    <p>Javascript</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>HTML</p>
                    <p>Bootstrap</p>
                    <p>Gaming API</p>
                </div>
                </div>
            </div>
            <div className='project-summary'>
                <h2>Summary</h2>
                <div>
                I got to lead a team of 3 devs, including myself, to create this fun social app for any gamer! I decided to stretch myself and include things that I haven't worked with before. 
                Such as bootstrap insted of raw CSS, also using MongoDB instead of SQL that i had used previously. We also decided to use a massive API to pull information from at the request
                of the user. We worked togethe using Miro and created our workflow. Every time we accomplished our tasks we would merge and inspect the work on github! What an amazing resource, it made it 
                so much easier to collaborate. We hosted our backedn on Heroku and our frontend on netlify with no issues, we had been very familiar with both at this point. The best part of the project was creating 
                the game info page that would take all the info from the api and organize it in a way that was pleasing to the user. 
                </div>
            </div>
        </div>
    )
}