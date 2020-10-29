import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Foodbox/Foodbox';
import AddNewFoods from './Addnewfoods/Addnewfoods';
import './App.css';



class App extends React.Component {

  state = {
    foodList: foods.slice(0, 10),

}

fooding = (food) => {
this.setState({
 foodList :[...this.state.foodList, food]
})
}

 render(){
  return (
    <div className="App">
      <AddNewFoods addFood = {this.fooding} />
      {this.state.foodList.map((food, index) => {
                    console.log(food)
                    return (
                        <FoodBox {...food} Key ={index}/>
                    )
                })}
    </div>
  );
 }
 
}

export default App;
