** layout
  - main div for cards and reset button to display
    - h1 - 'game of memory'
    - p x 16 (map over array of cards to generate <p> for each card)
    - button to reset game

  - reset button handleClick => 
    - set className = hidden
    - shuffle cards

  - each card has event listener onClick =>
    - reveal a card
    - some conditional
      - if no cards are 'revealed' , remove hidden className
      - if two cards are revealed && a !==b , set className to hidden
      - if two cards are revealed && a === b, leave them revealed, and maybe prevent them from being turned back over (disable onClick)
      - some end-game logic?? I guess if all cards are revealed the game is over so this is prob not needed

      idea: if this.state.numCardsRevealed === 2 && a !== b, this.setState{numCardsRevealed: 0}

  - state {
            cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, ]
           numCardsRevealed: 0, //will increment when card is flipped
          }