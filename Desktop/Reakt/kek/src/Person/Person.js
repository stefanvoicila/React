import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className= 'Person'>
      <p onClick={props.click}>YO SOY {props.name} Y YO AM {props.age} YEARS OLD</p>
      <p>{props.children}</p>
      <input type = 'text' onChange = { props.changed } value = { props.name }/>
    </div>
  )
}

export default person;
