import React, { Children } from 'react'

function Greet(props){
console.log(props);

    return(
        <div>
        <h1>hello {props.name} aged {props.age} </h1>
        {props.children}
        </div>
        )
}

export default Greet
