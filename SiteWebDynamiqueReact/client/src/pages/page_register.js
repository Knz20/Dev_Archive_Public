import React from 'react';
import {MDBContainer,MDBBtn,MDBCheckbox, MDBInput, MDBRow, MDBCard, MDBCol, MDBCardBody, MDBFile} from 'mdb-react-ui-kit';
import  {Nav, Navbar} from "react-bootstrap";
import dragon from "../logo/logo_acceuil.jpg" 
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react'; 
import bagn from '../logo/bang_signup.jpg'


export function Register() {
  
  useEffect(() => { 

    document.title = "Register";

},[]);
  
  return ( 

    <div className='page_register'> 

      <Navbar className='bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href="/">
        <img
              alt=""
              src={dragon}
              width="50"
              height="50"
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
    
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: `url(${bagn})`, height: '350px'}}></div>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', maxWidth: '1400px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Inscription</h2>

          <MDBCol col='12' size='xl'>
          <MDBRow>
          
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>

              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/> 
              <MDBInput wrapperClass='mb-4' label='Pseudo' id='form1' type='text'/>
        
          </MDBRow>

          <MDBInput size='md' wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Veuillez confirmer votre mot de passe' id='form1' type='password'/> 
          
                  <MDBFile size='lg' id='customFile' /> 
                  <h6 className="mb-0">Photo de profil</h6>
              
                  <div className="small text-muted mt-2">Upload your photo de profil. Max file size 50 MB</div>

                  <p></p> 
                  <p></p> 
                  <p></p>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='jai lu et jaccepte les condtions dutlisation de Gamings astuces ' />
          </div>

      </MDBCol>
        
      <MDBBtn color='dark' size='xxl'
      style={{ background: 'linear-gradient(to right, #647DEE, #7F53AC)'}}>
      Inscription
      </MDBBtn>
        
        </MDBCardBody> 
      </MDBCard>  


      </MDBRow> 
    </MDBContainer> 


    
  </div>
  );
}
