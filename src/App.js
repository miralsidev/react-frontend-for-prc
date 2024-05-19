import "./App.css";
function App() {
  const handleSubmit = async(event)=>{
    console.log(event.target.value);
  }
  return (
    <>
      <h1>I am register here</h1>
      <div>
        <from onSubmit = { handleSubmit }>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            // value={formData.fname}
            // onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            // value={formData.lname}
            // onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        </from>
      </div>
    </>
  );
}
export default App;
