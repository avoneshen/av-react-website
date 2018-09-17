import React, { Component } from 'react';
import { CardList } from '../components';
import {connect} from 'react-redux';
import { fetchCards } from '../redux/actions/card_actions';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCards());
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="Home">
        <CardList cards={cards} pageHandler={(path) => this.props.history.push(path)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards } = state;
  return cards
}

export default connect(mapStateToProps)(Home);
