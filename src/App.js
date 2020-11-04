import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Foodbox/Foodbox';
import AddNewFoods from './Addnewfoods/Addnewfoods';
import FoodBoxContainer from './FoodBoxContainer.js'
import './App.css';



class App extends React.Component {

  state = {
    foodList: foods.slice(0, 10),
    search: '',
    filteredItem: []

  }

  fooding = (food) => {
    this.setState({
      foodList: [...this.state.foodList, food]
    })
  }


  searchBar = (event) => {
    const lookedUpFood = event.target.value;
    let filteredResult = this.state.foodList.filter(food => food.name.toLowerCase().includes(lookedUpFood.toLowerCase()))
    this.setState({
      filteredItem: filteredResult,
      search: lookedUpFood
    })
  }

  // lookedUpWord = (event) => {
  //   this.setState({ search: event.target.value })
  // }


  render() {
    return (
      <div className="App">

        <form>
          <input type="text" name="search" value={this.state.search} onChange={this.searchBar} placeholder="search" />
        </form>
        <AddNewFoods addFood={this.fooding} />
        <FoodBoxContainer foodList={this.state.foodList} search={this.searchBar} filteredItem={this.state.filteredItem} />
      </div>
    );
  }

}

export default App;
