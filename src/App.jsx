import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Card from './component/Blog_Card/Card';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  // console.log(data)
  return (
    <div className="App">
      <div className='gird grid-cols-6'>
        <div className="blog-page border-2 grid-cols-6 ">
          {
            data.map(dt => <Card
              dt={dt}
            ></Card>)
          }
          <h1>Blog page</h1>
        </div>
        <div className="bookMark border-2 grid-cols-6 ">
          <h1>book mark</h1>
        </div>
      </div>
    </div>
  )
}

export default App
