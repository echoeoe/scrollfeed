import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Post from '../components/Post'; 

function Home(){
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Post title="title text" body="body message"/>
      <button id="loginBtn">...</button>
    </>
  );
}

export default Home;