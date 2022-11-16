import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  return (
    <div className="App">
      <div>
        <div>
          <h1>Food List</h1>
        </div>
        {foods.map((food) => {
          return (
            <>
              <p> {food.name} </p>
              <img src={food.image} width="300px" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
