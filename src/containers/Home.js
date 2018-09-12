import React, { Component } from 'react';
import { CardList } from '../components';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  async componentWillMount () {
    try {
      const cards = await this.getCards();
      this.setState({ cards });
    } catch (e) {
      // Process error
      console.log(e);
      return [];
    }
  }

  // Validate if the returned value is valid
  async getCards() {
    try {
      const cards = await fetch('cards.json');
      const fetchedCards = await cards.json()
      console.log(fetchedCards);
      return fetchedCards.cards.map(card => ({...card}));
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  render() {
    const cardList = this.state.cards;
    return (
      <div className="Home">
        <CardList cards={cardList} pageHandler={(path) => this.props.history.push(path)}/>
      </div>
    );
  }
}
