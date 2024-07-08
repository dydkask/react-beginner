import Button from "./Button";
import { useState , useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  /*
  const [count,setValue] = useState(0);
  const [keyword,setKeyword] =useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("many");
  const onlyOnce = () => {
    console.log("only once");
  }
  useEffect(onlyOnce,[]);
  useEffect(()=>{
    if(keyword !== ""){
      console.log(keyword);
    }
  },[keyword]);
  useEffect test
  */

  // const [showing,setShowing] = useState(false);
  // const onClick = () => {
  //   setShowing(prev => !prev);
  // }
  // function byFn(){
  //   console.log("bye");
  // }
  // function hiFn(){
  //   console.log("hello")
  //   return byFn;

  // }
  // function Hello(){
  //   useEffect(hiFn,[])
  //   return <h1>Hello</h1>
  // }
  // usetEffect test

  // const [todo,setTodo] = useState("");
  // const [todos,setTodos] = useState([]);
  // const onChange = (event) =>{
  //   setTodo(event.target.value)
  // }
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if(todo===""){
  //     return;
  //   }
  //   setTodos( (currentArray) => [todo, ...currentArray])
  //   setTodo("");

  // }
  // console.log(todos);
  // todoList 

  // const [loadoing,setLoading] =useState(true);
  // const [coins,setCoins] =useState([]);
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
  //     setCoins(json)
  //     setLoading(false)
  //   })
  // },[]);
  // coin track



  return null;
      {/* <h1>coins</h1>
      {loadoing ? "loading" : "test"}
      <ul>
        {coins.map((coin) => <li key={coin.name}>{coin.name} ( {coin.symbol} : {coin.quotes.USD.price} )</li>)}
      </ul>
      coin track
      */}
      {/* <form onSubmit={onSubmit}>

      <input type="text" value={todo} onChange={onChange} placeholder="search here "></input>
      <button>click</button>
      </form>
      <hr></hr>
      <ul>
      {todos.map((item,index)=> 
      <li key={index}>{item}</li>
    )}
      </ul> 
      todoList
      */}
      
      {/* {
        showing ? <Hello/> :null
      }
      <button onClick={onClick}>{showing ? "hide" : "show"}</button> 
      useEffcet test 
      */}
      {/* <input type="text" value={keyword} onChange={onChange} placeholder="search here "></input>
      <h1>{count} </h1>
      <button onClick={onClick}>click me </button> */}
}

export default App;
