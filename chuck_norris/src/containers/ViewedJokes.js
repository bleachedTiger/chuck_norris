import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Card, List, ListItem } from 'material-ui';

class ViewedJokes extends Component {
  renderJokes() {
    return this.props.ViewedJokes.map(joke => (
      <ListItem
        key={joke.id}
        primaryText={joke.value}
        leftAvatar={<Avatar src={joke.icon_url} />}
      />
    ))
  }

  render() {
    return (
      <Card><List> {this.renderJokes()} </List></Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    ViewedJokes: state.ViewedJokes
  };
}

export default connect(mapStateToProps)(ViewedJokes);