import React, { useState } from 'react'
import logo from './logo.svg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './App.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from './static/CTlogo.png'
import SwirlArrowDown from './static/swirl_arrow_down.png'

function App() {
  const styles = {
    container1: {
      backgroundColor: '#0f1929',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2: {
      backgroundColor: '#FAFAFA',
      height: '100vh',
      justifyContent: 'center'
    },
    logo: {
      height: '400px',
      width: '400px',
      borderRadius: '20px'
    },
    textContainer: {
      textAlign: 'center',
    },
    title: {
      fontSize: '3.8rem',
      fontWeight: 'bold',
      fontFamily: "'Playwrite NG Modern', cursive",
      textShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
    },
    subtitle: {
      fontSize: '1.6rem',
      marginTop: '1rem',
      fontFamily: "'Montserrat', sans-serif"

    },
    title2: {
      fontSize: '4rem',
      fontWeight: 'bold',
      fontFamily: '"Oswald", sans-serif'
    },
    subtitle2: {
      fontSize: '2rem',
      marginTop: '1rem',
      fontFamily: "'Montserrat', sans-serif"

    },
    hr: {
      border: '1px solid #fff',
      width: '75%',
      margin: '1rem auto',
    },
    h1: {
      FontFace: "Playwrite NG Modern",
      fontSize: '50px'
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  if (inView) {
    controls.start('visible');
  }

  const fadeInOnView = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <div>
      <motion.div style={styles.container1} initial="hidden" animate="visible" variants={fadeIn}>
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className='text-center'>
              <Image src={Logo} style={styles.logo} />
            </Col>
            <Col className=''>
              <div style={styles.textContainer}>
                <Row>
                  <Col>
                    <h1 style={styles.title}>Cognito Technologies</h1>
                  </Col>
                </Row>
                <hr style={styles.hr} />
                <Row>
                  <Col>
                    <div style={styles.subtitle}>Cognito : Where technology meets well-being</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
      <motion.div style={styles.container2} ref={ref} initial="hidden" animate={controls} variants={fadeInOnView}>
        <Row className='mt-5 pt-5 justify-content-center text-center'>
          <Container>
            <motion.div initial="hidden" animate={controls} variants={fadeInFromTop}>
              <Image src={SwirlArrowDown} height={300} width={400} />
            </motion.div>
          </Container>
          <div className='mt-1 pt-1'>
            <Row>
              <motion.h1 style={styles.title2} initial="hidden" animate={controls} variants={fadeInOnView}>
                Arriving Soon!
              </motion.h1>
            </Row>
            <Row>
              <motion.div style={styles.subtitle2} initial="hidden" animate={controls} variants={fadeInOnView}>
                To unlock the future...
              </motion.div>
            </Row>
          </div>
        </Row>
      </motion.div>
    </div>
  )
}

export default App
