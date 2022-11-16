import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const uuid = require('uuid');
  return (
    <div className="App">
      <div>
        <AddFoodForm foods={foods} setFoods={setFoods} />
        <div>
          <h1>Food List</h1>
        </div>
        {foods.map((food) => {
          return (
            <Row style={{ width: '100%' }}>
              <FoodBox food={food} />
            </Row>
          );
        })}
        {/* <FoodBox
          food={{
            name: 'Orange',
            calories: 85,
            image: 'https://i.imgur.com/abKGOcv.jpg',
            servings: 1,
          }} */}
      </div>
    </div>
  );
}

export default App;
