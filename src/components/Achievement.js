import React from 'react'

const Achievement = (props) => (
  <div>
    <h1>This is my Achievement</h1>
    <p>I have { props.match.params.id } achievements </p>
  </div>
)

export default Achievement
