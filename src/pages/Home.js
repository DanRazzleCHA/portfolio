import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";
import Projects from '../components/Projects';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <>
      <Container>
      <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Container className='hero'>
              <Row className='hero d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center items-center'>
                  <Image src='/profile.jpg' width={400} height={400} style={{minWidth:300}} roundedCircle fluid/>
                </Col>
                <Col className='d-flex flex-column'>
                  <h1 className='display-5 fw-bold'>
                    Dan Razzle Hadji Acmad
                  </h1>
                  <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
                  <hr />
                  <p>
                    A 3rd Year BSIT Student Major in Web Development.
                  </p>
                  <div className='d-flex align-items-center gap-2'>
                    <Link to='/work'>
                      <Button className='btn-lg' variant='outline-light'>View Work</Button>
                    </Link>
                    <SocialLinks />
                  </div>
                </Col>
              </Row>
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
            <Row>
            <Col>
              <h1 className='display-1 fw-bold'>About Me</h1>
              <hr />
              <p>
              Honestly, I had no ideas and knowledge about programming. All I know was this is an in-demand course and that is why I enrolled in it. I love designing but not that good in coding. I am continuing to learn and grow as the days go by. I believe that continuous effort will result in continuous growth.
              </p>
              
                <div className='display-6 d-flex gap-3'>
                  <h3 className='fw-bold'>Tech Stack</h3>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <FaJs />
                  <FaReact />
                </div>
            </Col>
            <Col className='border rounded p-2 w-100' style={{minWidth:300}}>
              <Image src='/achievements.png' className='w-100 h-100 object-cover' fluid/>
            </Col>
          </Row>
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <Row className='mt-5 border rounded text-light p-5'>
        
          <div className='d-flex justify-content-between'>
            <h1 className='display-1 fw-bold'>Recent Projects</h1>
            <Link to="/work" className='d-flex align-items-center'><Button className="text-light"variant='link'>View more<AiOutlineArrowRight className='m-2'/></Button></Link>
          </div>
          <Projects />
         </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <div className='d-flex flex-column justify-content-center text-center my-5'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my socials where you can ask me if you have any question 
              Feel free to contact me!.
            </p>
           <div className='d-flex justify-content-center'>
            <SocialLinks/>
           </div>
          </div>
      </motion.div>
      </AnimatePresence>
      </Container>
    </>
  );
};

export default Home;
