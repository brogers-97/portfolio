import './projects.css'
import ImageGallery from 'react-image-gallery'
import React from 'react'

export default function ProjectTwo(){
    

    class MyGallery extends React.Component {
        render() {
            const images = [
                {
                    original: '/assets/EOwindow.png'
                },
                {
                    original: '/assets/EOwindow1.png'
                },
                {
                    original: '/assets/EOwindow4.png'
                },
                {
                    original: '/assets/EOwindow2.png'
                },
                {
                    original: '/assets/EOwindow5.png'
                },
                {
                    original: '/assets/EOwindow6.png'
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
                <h1>Equestrian Organizer</h1>
                <p><a href="https://github.com/brogers-97/Equestrian-Organizer" target="_blank" rel="noopener noreferrer">Source Code</a></p>
                <p><a href="https://equestrian-organizer.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Page</a></p>
            </div>
            <div className="project-info">
                <div className='gallery-container'>
                    <MyGallery />
                </div>
                <div className='tech-div'>
                    <h2>Technology Used</h2>
                <div className='tech-used'>
                    <p>JavaScript</p>
                    <p>Node.JS</p>
                    <p>Express</p>
                    <p>HTML</p>
                    <p>PSQL</p>
                    <p>Twilio</p>
                    <p>CSS3</p>
                </div>
                </div>
            </div>
            <div className='project-summary'>
                <h2>Summary</h2>
                <div>
                    This one is a bit of a passion project. Horse ranches can take care of anywhere from 10-1500 horses and that can create a lot of mistakes.
                    This project is to help equestrians keep track of their horses, tasks and workday! I wanted it to be similar to a CRM so I knew that i would need a server
                    to keep the users data. Things that were essential: login, CRUD for all data the user sees fit and reminders for tasks. I created the back end with Express and hosted
                    all the endpoints on Heroku. Creating the interface was a challenge but i managed to get a organized feel where the user can see all the important data right from the 
                    homepage! I added API's for the time of day and also the weather for ranch depending on their zip code! To create the reminder I implimented twilio and created a funciton 
                    that would do a few things. Check the current date and time and cross reference for any task that is set for the exact same date and time. If this condition is met it would take
                    the "task data" and send it to the twilio API along with the users phone number. From there the reminder was sent to the user via text message!
                </div>
            </div>
        </div>
    )
}