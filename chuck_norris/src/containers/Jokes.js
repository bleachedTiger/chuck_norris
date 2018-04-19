import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, Dialog, TextField, FloatingActionButton, List, ListItem } from 'material-ui';
import ContentSearch from 'material-ui/svg-icons/action/search';
import OneJoke from '../components/OneJoke';
import { selectedJoke } from '../actions/joke';
import { viewedJokes } from '../actions/viewedJokes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const cardStyles = {
  padding: 10
}
const buttonStyles = {

}

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = ({ query: '', joke: {}, jokes: [], open: false });
    this.fetchJokes = this.fetchJokes.bind(this);
  }

  fetchJokes(query) {
    axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then(res => {
        if (res.data.result.length > 0) {
          this.setState({ jokes: res.data.result })
        }
      })
      .catch(err => console.error(err));
  }

  handleClick(joke) {
    this.setState({ joke, open: true });
    this.props.selectedJoke(joke);
  }

  displayJokes() {
    return this.state.jokes.map(joke => (
      <ListItem
        key={joke.id}
        primaryText={joke.value}
        leftAvatar={<Avatar src={joke.icon_url} />}
        onClick={() => this.setState({ joke, open: true })}
      />
    ))
  }

  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <TextField
            id='query'
            hintText='Search Jokes'
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <FloatingActionButton mini={true} style={buttonStyles} onClick={() => this.fetchJokes(this.state.query)}>
            <ContentSearch />
          </FloatingActionButton>
        </Card>
        <Dialog
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          <OneJoke joke={this.state.joke} />
        </Dialog>
        <List>
          {this.displayJokes()}
        </List>
      </div>
    );
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectedJoke,
    viewedJokes
  });
}
export default connect(null, mapDispatchToProps)(withRouter(Jokes));