import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);
  const uuid = require('uuid');
  return (
    <div className="App">
      <div>
        <div>
          <h1>Food List</h1>
        </div>
        {foods.map((food) => {
          return (
            <div key={uuidv4()}>
              <p> {food.name} </p>
              <img src={food.image} width="250px" />
            </div>
          );
        })}
        <FoodBox
          food={{
            name: 'Orange',
            calories: 85,
            image: 'https://i.imgur.com/abKGOcv.jpg',
            servings: 1,
          }}
        />
      </div>
    </div>
  );
}

export default App;
