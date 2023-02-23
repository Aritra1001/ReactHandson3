import React, { Component } from 'react';
import "./Style.css"

export default class EmployeeData extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
  render() {
    return (
      <>
        <h1 className='head'>Employee Feedback Data </h1>
        <div className='container'>
            {this.props.data.map((item, index)=>{
                 return(
                    <div className='item' key={index}>
                        <span>Name: {item.name} |</span>
                        <span>Department: {item.department} |</span>
                        <span>Rating: {item.rating} </span>
                    </div>
                 );
            })}
        </div>
        <button type='button' className='back_btn' onClick={this.props.toggleFunc}>Go Back</button>
      </>
    )
  }
}
