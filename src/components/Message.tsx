import React, { useContext } from 'react'
import {UserContext} from './ContextTypes';

const Message: React.FC = () => {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error("Context must be provided!");
  }
  
  return (
    <div>
        <p>I'm message component!</p>
        <p>{context.userName}, {context.messageText}!</p>
    </div>
  )
}

export default Message