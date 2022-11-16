import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import Toggle from './components/Toggle';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [query, setQuery] = useState('');
  const uuid = require('uuid');
  const deleteItem = (name) => {
    let copyFoods = [...foods];
    let foodsWithoutDeleted = copyFoods.filter((item) => item.name !== name);
    setFoods(foodsWithoutDeleted);
  };

  return (
    <div className="App">
      <div>
        <Toggle>
          <div id="newpost">
            <AddFoodForm foods={foods} setFoods={setFoods} />
          </div>
        </Toggle>

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
                <FoodBox
                  food={food}
                  foods={foods}
                  setFoods={setFoods}
                  deleteItem={deleteItem}
                />
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
