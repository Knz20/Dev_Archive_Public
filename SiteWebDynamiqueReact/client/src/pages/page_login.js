import React from 'react';
import {MDBContainer,MDBBtn, MDBInput, MDBRow, MDBCard, MDBCol, MDBCardBody, MDBIcon} from 'mdb-react-ui-kit';
import  {Nav, Navbar} from "react-bootstrap";
import dragon from "../logo/logo_acceuil.jpg" 
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react'; 
import bagn from '../logo/bang_signup.jpg'


export function Connec() {
  
  useEffect(() => { 

    document.title = "connexion";

},[]);
  
  return ( 

    <div className='page_login'> 
      <div class="opacity-75">
      <Navbar className='bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href="/">
        <img
              alt=""
              src={dragon}
              className="logo"
            />
        </Navbar.Brand> 
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />     
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    </div>
    <MDBContainer fluid>

      <div className="bg-image" style={{backgroundImage: `url(${bagn})`, height: '350px'}}></div>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', maxWidth: '1400px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Connexion</h2>

          <MDBCol col='12' size='xl'>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <MDBBtn color='dark' size='xxl'
      style={{ background: 'linear-gradient(to right, #647DEE, #7F53AC)'}}>
      Inscription
      </MDBBtn> 

                  <p></p> 
                  <p></p> 
                  <p></p>


                  <p>ou connexion avec:</p> 

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>


      </MDBCol>
                  <p></p> 
                  <p></p> 
                  <p></p>


      <div>
          <p className="mb-0">Vous n'avez pas de compte? <a href="/register" class="text-dark-50 fw-bold">Sign Up</a></p>

        </div>
   
        
        </MDBCardBody> 
      </MDBCard>  


      </MDBRow> 
    </MDBContainer> 


    
  </div>
  );
}
