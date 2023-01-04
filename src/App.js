
// import React from 'react'

// class App extends React.Component{
//   render() {
//     return <div>Hi i'm a class based component</div>
//   }
// }

// export default App

// function App() {
//   return <div>something</div>
// }

// const App = () => {
//   return <div>App from arrow function</div>
// }

import Greet,{Hobby} from "./Greet"

export const App = function () {
  return <>
    <h1>Heading</h1>
    <Greet name="Harsh" />
    <Greet name="name 2" />
    <Greet name="skldjf asldkf" />
    <Greet name="sdfasdfsa" />
    <Hobby/>
    </>
}

export const App2 = function () {
  return <div>Hi I am App2 </div>
}