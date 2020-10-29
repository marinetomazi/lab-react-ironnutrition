import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Foodbox/Foodbox';
import AddNewFoods from './Addnewfoods/Addnewfoods';
import './App.css';



class App extends React.Component {

  state = {
    foodList: foods.slice(0, 10),
    search: '',

  }

  fooding = (food) => {
    this.setState({
      foodList: [...this.state.foodList, food]
    })
  }

  searchBar = (event) => {
    const lookUpWord = event.target.value
    const searchResult = []


    // SEARCH RESET
    // console.log(lookUpWord.length)
    // if (lookUpWord.length === 0) {
    //   this.setState({
    //     foodList: [...this.state.foodList]
    //   })
    // }

    this.state.foodList.forEach(el => {
      console.log(el.name.includes(lookUpWord))
      if (el.name.includes(lookUpWord)) {
        searchResult.push(el)
      }
    })
    console.log("searchResult===", searchResult)
    this.setState({
      search: lookUpWord,
      foodList: searchResult
    })



    // this.state.foodList.slice().filter(food => {
    //   //food.name doit inclure les lettres dans lookUpWord
    //   if (food.name.includes(lookUpWord)) {
    //     return this.setState({
    //       foodList: 
    //     })
    //   }
    // })


  }

  render() {
    return (
      <div className="App">

        <form>
          <input type="text" name="search" value={this.state.search} onChange={this.searchBar} placeholder="search" />
        </form>

        <AddNewFoods addFood={this.fooding} />
        {this.state.foodList.map((food, index) => {
          {/* console.log(food) */ }
          return (
            <FoodBox {...food} Key={index} />
          )
        })}
      </div>
    );
  }

}

export default App;
