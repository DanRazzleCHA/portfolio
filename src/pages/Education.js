import React from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container className='d-flex flex-column justify-content-center'>
          <h1 className='display-3 fw-bold text-center'>My Education</h1>
          <p className='text-center'>These are my academic qualifications:</p>
          <div className="main-timeline-5">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y:15}}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:1}}>
              <div className="timeline-5 right-5">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5>West Central Elementary School</h5>
                    <span className="small text-muted"><i className="fas fa-clock me-1"></i>2008-2015</span>
                    <p className="mt-2 mb-0">Burgos Street, Dagupan, Pangasinan</p>
                    <hr/>
                    <p>
                      In my early years of studying, particularly when I was in Elementary, I studied at West Central Elementary 
                      School.
                    </p>
                  </div>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y:15}}
                whileInView={{ opacity: 1, y:0}}
                transition={{delay:2}}>
                  <div className="timeline-5 right-5">
                    <div className="card w-100">
                      <div className="card-body p-4">
                        <h5>Dagupan City National High School</h5>
                        <span className="small text-muted"><i className="fas fa-clock me-1"></i>2015-2021</span>
                        <p className="mt-2">Tapuac District, Dagupan, Pangasinan</p>
                        <hr />
                        <p>
                          During my High School years, I studied at Dagupan City National High School (DCNHS). 
                          I took Humanities and Social Sciences (HUMSS) as my Senior High track.
                        </p>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y:15}}
                whileInView={{ opacity: 1, y:0}}
                transition={{delay:3}}>
                  <div className="timeline-5 right-5">
                    <div className="card w-100">
                      <div className="card-body p-4">
                        <h5>PHINMA-University of Pangasinan</h5>
                        <span className="small text-muted"><i className="fas fa-clock me-1"></i>2021-current</span>
                        <p className="mt-2 mb-0">Arellano Street, Downtown District, Dagupan, Pangasinan</p>
                        <hr />
                        <p>
                        During my College years, I enrolled with a Bachelor of Science in Information  Technology as my course. 
                        I am struggling because first of all, I am lacking in knowledge and I also don't have devices to use. 
                        But I am doing my best to strive and survive. I took Web Development as my major track and I am happy with it.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
