import './App.css';
import { Context } from './context';
import React, { useContext ,useState} from 'react';

function App() {

  const {list , dispatch} = useContext(Context)
  const [state,setstate]=useState()

  return (
    <div className="App-header">
      <form onSubmit={(e)=>{
        console.log('sds');
        e.preventDefault()
        dispatch({type:'ADD' , item:{state}})
      }}>
      <input type='text' onChange={(e)=>(setstate(e.target.value))}/>
      <input type='submit'/>

      </form>



      {list.map(item=>(
        <div>
          <p>{item.state}</p>
          <button onClick={()=>dispatch({type:'DELETE', id:item.id})}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
