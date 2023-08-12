import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-100'>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/upang_updates.jpg" className='w-100 h-100 object-fit-cover' fluid rounded/>
          </div>
          <Carousel.Caption>
            <h3>Upang Updates</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/cite.png" className='w-100 h-100 object-fit-cover' fluid rounded/>
          </div>
          <Carousel.Caption>
            <h3>CITE Events</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/portal.jpg" className='w-100 h-100 object-fit-cover' fluid rounded/>
          </div>
          <Carousel.Caption>
            <h3>Portal</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
