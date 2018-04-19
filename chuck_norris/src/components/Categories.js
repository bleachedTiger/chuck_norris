import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, Dialog, FlatButton, List, ListItem} from 'material-ui';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import OneJoke from './OneJoke';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = ({ categories: [], joke: {}, open: false })
    this.displayJokes = this.displayJokes.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ categories: res.data });
        }
      })
      .catch(err => console.error(err));
  }

  getRandomJoke(category) {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => {
        if (res.data) {
          this.setState({ joke: res.data, open: true })
        }
      })
      .catch((err) => console.error(err));
  }

  displayJokes() {
    return this.state.categories.map((category, i) => (
      <ListItem key={i} onClick={() => this.getRandomJoke(category)}>{category}</ListItem>
    ));
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Joke Categories"
          subtitle="(click for full list)"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton primary={true} label="Jokes" onClick={() => this.props.history.push('/jokes')} />
          <FlatButton primary={true} label="Home" onClick={() => this.props.history.push('/')} />
        </CardActions>
        <CardText expandable={true}>
          <List>
            {this.displayJokes()}
          </List>
        </CardText>
        <Dialog
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          <OneJoke joke={this.state.joke} />
        </Dialog>
      </Card>
    );
  }
}

export default withRouter(Categories);