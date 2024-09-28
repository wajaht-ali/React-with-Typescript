import React from 'react'

const ComplexTypes = () => {
    // tuple
    const atuple: [string, number] = ['Ali', 14];
    // enum
    enum Codes {first = 1, second = 2};
    // any
    const fName: any = 'a';
    // void: when ftns don't return anything
    const myFunc = (): void => {
        console.log("Consoled!");
    }
    return (
    <div>
        <p>The value {fName} is of {typeof fName} type!</p>
    </div>
  )
}

export default ComplexTypes