import React, { Component } from 'react'
import './App.css';


export default class App extends Component {

  state = {
    cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    cardsFlipped: 0,
  }

  render() {
    return (
      <>
        <h1 className="App-header">
          Game of Memory
        </h1><br/>
      <div className="App">

        {this.state.cards.map((card) => {
         return <p className="card">
           <span className="hidden">{card}</span></p>
        })
        }
      </div>
      </>
    );
  }
}

