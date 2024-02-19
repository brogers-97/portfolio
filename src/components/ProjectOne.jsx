import './projects.css'
import ImageGallery from 'react-image-gallery'
import React from 'react'

export default function ProjectOne(){
    

    class MyGallery extends React.Component {
        render() {
            const images = [
                {
                    original: '/assets/caveFinal.png'
                },
                {
                    original: '/assets/caveFinal1.png'
                }
        
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
                <h1>Cave Explorer</h1>
                <p><a href="https://github.com/brogers-97/Cave-Explorer" target="_blank" rel="noopener noreferrer">Source Code</a></p>
                <p><a href="https://brogers-97.github.io/Cave-Explorer/" target="_blank" rel="noopener noreferrer">View Page</a></p>
            </div>
            <div className="project-info">
                <div className='gallery-container'>
                    <MyGallery />
                </div>
                <div className='tech-div'>
                    <h2>Technology Used</h2>
                <div className='tech-used'>
                    <p>HTML</p>
                    <p>Canvas</p>
                    <p>JavaScript</p>
                    <p>CSS3</p>
                    <p>Web Audio</p>
                </div>
                </div>
            </div>
            <div className='project-summary'>
                <h2>Summary</h2>
                <div className='project-summary'>
                I launched my first project, a cave exploration web game built with JavaScript, HTML, and CSS. 
                The game features a 10x10 pixel box representing the player navigating through a cave, with simulated gravity affecting the box's movement. 
                The challenge was creating dynamic, random walls for the player to avoid, achieved by generating arrays of y-values for ceilings and floors 
                that change with each spacebar press, giving the illusion of jumping. A collision detection function ends the game upon contact with walls. 
                Enhancements include a pixelated background, glow effects for the character, and sound effects for gameplay and collisions. 
                The project was completed in just 20 hours, marking my successful venture into JavaScript game development.
                </div>
            </div>
        </div>
    )
}