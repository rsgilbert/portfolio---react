// higher order component (hoc) - a component
              // that renders another component

import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) =>(
  <div>
    <p>Your info: {props.info}</p>
  </div>
)

ReactDOM.render(<Info info="your detais"/>, document.getElementById('app'))
