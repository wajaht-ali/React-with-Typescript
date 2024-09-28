import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface UserMessage {
    user: string,
    message: string,
    setUser: Dispatch<SetStateAction<string>>,
    setMessage: Dispatch<SetStateAction<string>>,
}
const UseEffectTypes: React.FC<UserMessage> = ({user, message, setUser, setMessage}) => {
    useEffect(() => {
        const time = setTimeout(() => {
            setUser('Hammad');
            setMessage("New Message");
        }, 5000)
        return () => clearTimeout(time);
    }, [])
  return (
    <div>
        <p>{user}, {message}!</p>
    </div>
  )
}

export default UseEffectTypes