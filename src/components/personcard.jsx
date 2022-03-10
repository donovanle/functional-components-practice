import React from 'react'

const Personcard = (props) => {
  return (
      <div>
        <h2>{props.lastname}, {props.firstname}</h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.haircolor}</p>
      </div>
      )
}

export default Personcard

