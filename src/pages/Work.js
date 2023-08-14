import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <h1 className='display-1 fw-bold'>
              My Work
            </h1>
            <p>Here are some of the projects I've worked on:</p>
            <hr/>
            <ul>
              <li>
                <h4 className='fw-bold'>Upang Updates</h4>
                <p>A Mobile Application that updates you on latest events that's happening in UPang 
                    <br/> Tech Stack: Android, Java, Firebase
                </p>
              </li>
              <li>
                <h4 className='fw-bold'>CITE Events</h4>
                <p>A web page that showcase the latest events happens in CITE
                  <br/> Tech Stack: HTML, CSS, JS
                </p>
              </li>
              <li>
                <h4 className='fw-bold'>Portal</h4>
                <p>A School portal for PHINMA UPang students and faculty
                  <br/> Tech Stack: .Net, C#
                </p>
              </li>
            </ul>
          </Col>
          <Col className='projects'>
            <Projects />
          </Col>
        </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
