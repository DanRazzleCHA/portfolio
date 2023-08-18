import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-100' style={{maxWidth:800, minWidth:300, height:300}}>
        <Carousel.Item>
            <Image src="/upang_updates.jpg" className=' w-100 h-full object-fit-cover' style={{maxWidth:800, minWidth:300, objectFit: 'cover', height:300}} fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark bordery w-25 rounded'>Upang Updates</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/cite.png" className=' w-100 h-full  object-fit-cover' style={{maxWidth:800, minWidth:300, objectFit: 'cover',  height:300}}fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark border w-25 rounded'>CITE Events</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/portal.jpg" className=' w-100 h-full object-fit-cover' style={{maxWidth:800, minWidth:300, objectFit: 'cover',  height:300}} fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark border w-25 rounded'>Portal</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
