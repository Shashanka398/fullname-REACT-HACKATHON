import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { createEvent } from '@testing-library/react';

function App() {
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:''

  })
  const [submitted, setSubmitted] = useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,[name]:value
    })
  }
   
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
    console.log(formData.firstName, formData.lastName);
   
  };
  
  return (
    <div className="App">
      <form  onSubmit={handleSubmit}>
        <h1>Full Name display</h1>
        <div>
        <label>
            <strong>FirstName : </strong>
        <input  type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
        </label>
        </div>
        <div>
        <label>
            <strong>LastName : </strong>
            <input  type="text" name="lastName" value={formData. lastName} onChange={handleChange}/>
            </label>

        </div>
        
       <button type="submit" >Submit</button>
      </form>
      {submitted && (
         <div   className="Name">
        <p>Full Name : </p>
        <p>{` ${formData.firstName} ${formData.lastName}`}</p>
        </div>

      )}
    </div>
  );
}

export default App;
