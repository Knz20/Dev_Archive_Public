import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import  {Nav, Navbar} from "react-bootstrap";
import dragon from "../logo/logo_acceuil.jpg" 
import { useEffect } from 'react'; 
import Typed from 'react-typed' 

export function Acceuil() {


  useEffect(() => { 

    document.title = "Gaming's astuces";

},[]);

  return (
    <div>
      <header>  
      <div class="opacity-75">
    <Navbar className='bar' collapseOnSelect expand="xl" bg="dark" variant="dark">
      
        <Navbar.Brand className='brand-t' href="/">
        <img
              alt=""
              src={dragon}
              className="logo"
            />
          Gaming's astuces</Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link> 
            <Nav.Link href="/astuces">Astuces</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Connexion</Nav.Link>
            <Nav.Link eventKey={2} href="/register">Enregistrement</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
        </Navbar>
        </div>
      </header> 

      <main> 
        <div className='header'> 
        
          <div className='main-info'> 
          
          <h1>Bienvenue sur Gaming's astuces</h1>  

          <Typed
            className='typed-text' 
            strings={["Pour tous les gameurs", "Pour toutes les gameuses", "et tous les passionnées"]} 
            typeSpeed={40}
            backSpeed={60}
            loop
          /> 
  
          </div>
        
        </div>
      
      </main>
      
    </div>
  );
} 

