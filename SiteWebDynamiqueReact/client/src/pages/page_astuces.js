import React from 'react';
import  {MDBContainer} from 'mdb-react-ui-kit';
import  {Nav, Navbar, NavDropdown, Button, Modal, Input} from "react-bootstrap";
import dragon from "../logo/logo_acceuil.jpg" 
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import { useEffect, useState} from 'react'; 
import gaming from '../logo/gaming.jpg' 



export function Astuces() {


  useEffect(() => { 

    document.title = "astuce";

},[]); 

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return ( 
    
<div className='navbar_astuce'>
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
      <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">

          <NavDropdown
              id="responsive-navbar-nav"
              title="Astuces" 
              color='dark'
              menuVariant="dark"
            >  

            <nav className='liste_deroulante'>
              
              <NavDropdown.Item href="/astuce/liste_astuces">Mes astuces</NavDropdown.Item> 
              <NavDropdown.Item href="/astuce/mes_astuces">Dépôt d'astuce</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/astuce/depot_astuce">Aide</NavDropdown.Item>
            </nav>
            </NavDropdown> 

            <NavDropdown
              id="responsive-navbar-nav"
              title="Catégorie" 
              color='dark'
              menuVariant="dark"
            >  

            <nav className='liste_deroulante2'>
              
              <NavDropdown.Item href="/astuce/liste_astuces">Vie</NavDropdown.Item> 
              <NavDropdown.Item href="/astuce/mes_astuces">Arme</NavDropdown.Item>
              <NavDropdown.Item href="/astuce/depot_astuce">Combinaisons</NavDropdown.Item>
            </nav>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
       
    </Navbar>  
    </div>
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: `url(${gaming})`, height: '350px'}}></div>
    
    </MDBContainer> 

   

        <div className="toto"> 
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Chercher l'astuce" aria-label="Search"/>
                </form>
              </div>    
              </div>  

                <div className="titre_astuce">
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Les astuces</b></h2></div>
              </div>
                <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Ajouter une astuce
              </Button>
             </div>


           <div class="table-responsive-xxl" >
                     <table class="table table-striped table-hover table-bordered">
                      
    <tbody>
                            <tr>
                                <th>#</th>
                                <th>Name </th>
                                <th>Address</th>
                                <th>City </th>
                                <th>Country </th>
                                <th>Actions</th>
                            </tr>
                   
                        
                            
                            <tr>
                                <td>1</td>
                                <td>Rual Octo</td>
                                <td>Deban Steet</td>
                                <td>Newyork</td>
                                <td>USA</td>
                                <td>
                                   <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                     
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Demark</td>
                                <td>City Road.13</td>
                                <td>Dubai</td>
                                <td>UAE</td>
                                <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
                             
     
                            <tr>
                                <td>3</td>
                                <td>Richa Deba</td>
                                <td>Ocol Str. 57</td>
                                <td>Berlin</td>
                                <td>Germany</td>
                                <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
     
                            <tr>
                                <td>4</td>
                                <td>James Cott</td>
                                <td>Berut Road</td>
                                <td>Paris</td>
                                <td>France</td>
                                <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
     
     
                            <tr>
                                <td>5</td>
                                <td>Dheraj</td>
                                <td>Bulf Str. 57</td>
                                <td>Delhi</td>
                                <td>India</td>
                                <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
     
     
                            <tr>
                                <td>6</td>
                                <td>Maria James</td>
                                <td>Obere Str. 57</td>
                                <td>Tokyo</td>
                                <td>Japan</td>
                                <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
    </div>   
    </div>  
  );
} 

