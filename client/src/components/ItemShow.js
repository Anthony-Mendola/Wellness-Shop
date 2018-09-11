import React, { Component } from 'react'
import AddToCart from '../components/AddToCart'

class ItemShow extends Component {

  componentDidMount() {
    this.props.actions.fetchItem(this.props)
  }

  render() {
    const item = this.props.item


    return (
      <div className='item-div'>
        <a href='/items'>Back</a>
        <h2>{item.name}</h2>
        <img src={item.img_full} alt={item.name} />
        <h3><em>${item.price}</em></h3>
        { this.props.cartId && <AddToCart cartId={this.props.cartId} itemId={this.props.itemId}/>}
        <p dangerouslySetInnerHTML={{__html: item.description}} />
      </div>
    )
  }