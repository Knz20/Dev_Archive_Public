import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
 
function Form() {
  // Définir l'état initial du formulaire
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    pseudo: '',
  });

  const [errors, setErrors] = useState({});

  // Fonction qui met à jour l'état du formulaire lorsque l'utilisateur entre des informations et qui valide le formulaire avant d'envoyer au serveur 
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.firstName) {
        newErrors.firstName = 'FirstName is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'LastName is required';
      }
    setErrors(newErrors);

    // s'il ne ya pas d'erreur , submit
    if (Object.keys(newErrors).length === 0) {
      // envoyer  de  la base  vers server
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </label>
      <br />
      <label>
        FirstName:
        <input type="text" name="firstName" onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </label>
      <br />


   
        </form> 
