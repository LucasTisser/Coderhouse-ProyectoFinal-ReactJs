import React, { Component } from 'react'
import './ItemListContainer.css';

export default class ItemListContainer extends Component {

    render() {
        return (
            <div className='listContainer'>
                {this.props.greeting}
            </div>
        )
    }
}
