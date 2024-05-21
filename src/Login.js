
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    
    const [formData, setFormData] = useState({
        email: '',
        password:'',
      });
      const [message, setMessage] = useState('');
  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((preValue) => {
      console.log("preValue==", preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:5000/api/login', { email, password });
            const response = await axios.post('http://localhost:5000/api/login',formData);
            localStorage.setItem('token', response.data.token);
         
            alert("Login successful")
            setMessage('Login successful');
        } catch (error) {
            console.error('Error:', error);
  
            if (error.response && error.response.data) {
                alert("Invalid username or password")
                setMessage('Invalid username or password');
              } else {
                alert("Server error. Please try again later.")
                setMessage('Server error. Please try again later.');
              }
        }
    
  }
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name='email' onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
           name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default Login;
