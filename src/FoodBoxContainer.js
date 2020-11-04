import React from "react";
import FoodBox from "./Foodbox/Foodbox";

class FoodBoxContainer extends React.Component {
    render() {

        var searching = false;
        if (this.props.filteredItem.length > 0) {
            var searching = true
        }
        console.log(this.props.filteredItem.length)

        return (
            <>
            {searching ? (
                     this.props.filteredItem.map(food => <FoodBox food={food} />) 
            )
            :
            (this.props.foodList.map(food => <FoodBox food={food} />))
            
            }
                

            </>
        );
    }
}

export default FoodBoxContainer;