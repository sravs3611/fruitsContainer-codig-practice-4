// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state1 = {count1 : 0}
  state2 = {count2 : 0}

  ateMango =() =>{
    this.setState((prevState) => ({count1 : prevState.count1 + 1}))
  }

  ateBanana =() =>{
    this.setState((prevState) => ({count2 : prevState.count2+ 1}))
  }
  render() {
    const {count1 }= this.state1
    const {count2 }= this.state2
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob <span className="span">{count1}</span> ate mangoes{' '}
            <span className="span">{count2} </span>bananas
          </h1>
          <div className="card-img">
            <div className="part">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button className="button" onClick={this.ateMango}>Eat Mango</button>
            </div>

            <div className="part">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button className="button" onClick={this.ateBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
