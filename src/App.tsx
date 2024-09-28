import { useState } from 'react';
import './App.css'
import Message from './components/Message';
import {UserContext} from "./components/ContextTypes";
// import StateTypes from './components/StateTypes';
// import UseEffectTypes from './components/UseEffectTypes';
// import ComplexTypes from './types/ComplexTypes';

function App() {
  const [user, setUser] = useState<string>('Ali');
    const [message, setMessage] = useState<string>('This is message!');
  // const firstVal: string = "NameString";
  // const firstVal: number = 123;
  // const firstVal: boolean = true;
  // const firstVal: number[] = [1,2,3]; // or Array<number>
  return (
    <UserContext.Provider value={{userName: user, messageText: message}}>
      <h1>Vite + React</h1>
      {/* <p>The value {firstVal} is of {typeof firstVal} type!</p> */}
      {/* <ComplexTypes /> */}
      <Message />
      {/* <StateTypes user={user} message={message} /> */}
      {/* <UseEffectTypes user={user} setUser={setUser} message={message} setMessage={setMessage}/> */}
    </UserContext.Provider>
  )
}

export default App
