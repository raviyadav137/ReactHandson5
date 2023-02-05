import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    return(
      <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update</button>
      </>
    )
}
function HOCRed(props){
    return(
        <h1 style={{backgroundColor:'Red'}}><props.cmp/></h1>
    )
}
function HOCGreen(props){
    return(
        <h1 style={{backgroundColor:'green'}}><props.cmp/></h1>
    )
}
export default Counter
export {HOCRed}
export {HOCGreen}