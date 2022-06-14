import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

import cv from '../img/cv-example.png'


function Landing() {


  return (
    <Container fluid>
      <Row>
        <Col className='left_side col-6'>
            <img src="/logo.png" alt="" /> 
            <p className="landing_title">Free Developer CV Builder</p> 
            <h4 className='landing_text'>No more wasting time and money. You can start building your 
            software developer "Curriculum Vitae" right away and export it for free. </h4>
            <Link to="/build">
                <Button variant='outline-dark' className='px-3 py-2'>Create CV</Button>
            </Link>{' '}
            <Button variant='outline-dark' className='px-3 py-2' disabled>View Your CV</Button>
        </Col>
        <Col className='col-6'>
            <img className='img-fluid' src={cv} alt="Logo" />
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
