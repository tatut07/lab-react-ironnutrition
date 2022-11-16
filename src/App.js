import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [query, setQuery] = useState('');
  const uuid = require('uuid');
  return (
    <div className="App">
      <div>
        <AddFoodForm foods={foods} setFoods={setFoods} />
        <Search query={query} setQuery={setQuery} />
        <Divider>
          <h1>Food List</h1>
        </Divider>
        {foods
          .filter((food) =>
            food.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((food) => {
            return (
              <Row style={{ width: '100%' }} key={uuidv4()}>
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
