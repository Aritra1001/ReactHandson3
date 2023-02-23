import React, { Component } from 'react';
import EmployeeData from "./EmployeeData";
import "./Style.css";

export default class Form extends Component {

  state={
    clicked: false,
    name: "",
    department:"",
    rating:"",
    data: []
  }

  handleChange=(event)=>{
    this.setState({
        [event.target.name]: event.target.value,
        [event.target.department]: event.target.value,
        [event.target.rating]: event.target.value
    })
    
 }

 toggleButtonClick=()=>{
    this.setState({clicked: !this.state.clicked})
 }

 handleClick=(event)=>{
    event.preventDefault();
   const saveData={
    name: this.state.name,
    department: this.state.department,
    rating: this.state.rating
   }
   const arr = this.state.data;
   arr.push(saveData);
   this.setState({data:arr});
   //console.log(this.state.data);
   this.setState({
    clicked:true,
    name: "",
    department: "",
    rating: ""
   })
}

  render() {
    return (
        <div>
            {!this.state.clicked ?
             <>
             <h1 className='head'>Employee Feedback Form</h1>
             <form >
               <label htmlFor='f_name'>Name: </label>
               <input type="text" id="f_name" placeholder='enter your name' name='name' onChange={this.handleChange}/>
               <br/> <br/>
               <label htmlFor='dept'>Department: </label>
               <input type={"text"} id="dept" placeholder='enter your department' name="department" onChange={this.handleChange}/>
               <br/> <br/>
               <label htmlFor='rate'>Rating: </label>
               <input type={"number"} id="rate" placeholder="enter your rating" name="rating" onChange={this.handleChange}/>
               <br/> <br/>
               <button type="submit" className='btn' onClick={this.handleClick}>Submit</button>
             </form>
             </> :
             <EmployeeData data={this.state.data} toggleFunc={this.toggleButtonClick}/>
             }
        </div>    
     
    )
  }
}
