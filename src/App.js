import React, { Component } from 'react';
import BoxList from"./BoxList";
import NavBar from "./NavBar";
import './App.css';

const CardState = {
  HIDING:0,
  SHOWING:1,
  MATCHING:2
}
let boxes = [
    {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
    {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
    {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
    {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
    {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
    {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
    {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
    {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
    {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
    {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
    {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
    {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
    {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
    {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
    {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
    {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
  ];

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {boxes: this.shuffle(boxes)};
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  handleClick(id) {
    const mapCardState = (boxes, idsToChange, newCardState) => {
      return boxes.map(b => {
        if (idsToChange.includes(b.id)) {
          return {
            ...b,
            cardState: newCardState
          };
        }
        return b;
      });
    }

    const foundCard = this.state.boxes.find(b => b.id === id);
    
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    let noClick = false;
    
    let boxes = mapCardState(this.state.boxes, [id], CardState.SHOWING);
    
    const showingCards =  boxes.filter((b) => b.cardState === CardState.SHOWING);
    
    const ids = showingCards.map(b => b.id);
    
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
          boxes = mapCardState(boxes, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(boxes, ids, CardState.HIDING);
      
      noClick = true;
      
      this.setState({boxes, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({boxes: hidingCards, noClick: false});
        }, 1300);
      });
      return;
    }
    
    this.setState({boxes, noClick});
  }
  handleNewGame(){
    let boxes = this.state.boxes.map((box)=>(
      {
        ...box,
        cardState:box.cardState = CardState.HIDING
      }
    ))
    boxes = this.shuffle(boxes);
    this.setState({boxes});
  }
  shuffle(array){
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}
 
  render() {
    return (
      <div className="App">
          < NavBar onNewGame={this.handleNewGame}/>
          <BoxList handleClick={this.handleClick} boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;