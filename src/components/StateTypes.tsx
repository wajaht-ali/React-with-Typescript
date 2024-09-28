import React from 'react'

interface UserMessage {
  user: string,
  message: string
}
const StateTypes: React.FC<UserMessage> = (props) => {

  return (
    <div>
      <p>{props.user}, {props.message}!</p>
    </div>
  )
}

export default StateTypes