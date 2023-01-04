function Greeting(props) {
  console.log(props)
  return <p>Hi {props.name}</p>
}

export const Hobby = ()=>{
  return <p>My hobby is basketball</p>
}

export default Greeting