// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div>
      <h1>Abhinand Shaji</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response)
        })
      }} >Click me</button>
    </div>
  );
}

export default App;
