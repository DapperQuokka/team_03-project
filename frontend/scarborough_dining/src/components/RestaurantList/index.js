import React, { Component } from 'react';
import Restaurant from '../Restaurant';
import '../Restaurant/styles.css'
import axios from 'axios';
export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            totalRestaurants: 0
        }

        this._getRestaurantList();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    _getRestaurantList() {
        axios.get('/restaurants/verified').then(response => {
            this.setState({
                restaurants: response.data,
                totalRestaurants: response.data.length
            });
        })
    }


    render() {
        return (
            <React.Fragment>
                <div class="restaurant-list"> 
                    <div class="jumbotron jumbotron-fluid">
                        <div class="header">
                            <h1 class="display-4 title">Scarborough Dining</h1>
                        </div>
                    </div>
                    <div className="restaurants">
                    <h2 className="restaurant-list-title mb-4 font-weight-bold">Scarborough Owned Restaurants</h2>
                        <div className="row">
                            {
                                this.state.restaurants.map(restaurant => {
                                    return <Restaurant key={restaurant._id} restaurant={restaurant} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
