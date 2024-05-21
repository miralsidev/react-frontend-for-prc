// import "./App.css";
// import axios from 'axios';
// import React, { useState } from 'react';
// function App() {

//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//   });

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     const { name, value } = event.target;
//     setFormData((preValue)=>{
//       console.log("preValue==", preValue);
//       return {
//         ...preValue,
//         [name]: value
//       };
//     })
//   };
//   const OnSubmitReg = async(event)=>{
//     event.preventDefault();
//     try {
//       console.log("from data = ",formData);
//       const response = await axios.post('http://localhost:5000/api/addUser',formData);
//       alert(response.data);
//     } catch (error) {
//       console.error('There was an error submitting the form!', error);
//     }
//   }
//   return (
//     <>
//       <h1>I am register here = {formData.fname}</h1>
//       <div>
//         <form onSubmit = {OnSubmitReg}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="fname"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lname"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }
// export default App;
import React from 'react'
import Reg from './Reg'
import Login from './Login'
function App() {
  return (
 <>
 <Reg/>
 <Login/>
 </>
  )
}

export default App