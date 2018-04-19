import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Card, List, ListItem } from 'material-ui';

class ViewedJokes extends Component {
  renderJokes() {
    if (this.props.viewedJokes.length === 0) {
      return <ListItem primaryText='You have not viewed any jokes yet!' />
    }
    return this.props.viewedJokes.map(joke => (
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
    viewedJokes: state.viewedJokes.viewedJokes
  };
}

export default connect(mapStateToProps)(ViewedJokes);