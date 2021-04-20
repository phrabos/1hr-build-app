import React, { Component } from 'react'
import './App.css';


export default class App extends Component {

  state = {
    cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    cardsFlipped: 0,
    cardStatus: 'hidden',
  }

  handleCardClick = (e) => {
    console.log(e.target.value)
    if(this.state.cardStatus === 'hidden'){
      this.setState({cardStatus: 'show' })
    }
    if(this.state.cardStatus === 'show'){
      this.setState({cardStatus: 'hidden' })
    }
    
  }

  render() {
    return (
      <>
        <h1 className="App-header">
          Game of Memory
        </h1><br/>
      <div className="App">

        {this.state.cards.map((card, i) => {
         return <p 
         key={card + i}
         onClick={this.handleCardClick}
         value={i}
         className='card'

         >
           <span className={this.state.cardStatus}>{card}</span>
           </p>
        })
        }
      </div>
      </>
    );
  }
}

