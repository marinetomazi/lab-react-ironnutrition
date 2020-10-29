import React from 'react';
import foods from '../foods.json';

class AddNewFoods extends React.Component {
  state = {
    name: '',
    calories: '', //Attention texte
    image: '',
  };

  newfoods = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  submitFoods = (event) => {
      event.preventDefault()
      this.props.addFood(this.state)
      this.setState({
        name: '',
        calories: '', //Attention texte
        image: '', 
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFoods}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.newfoods}
          />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.newfoods}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.newfoods}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNewFoods;
