import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText, Dialog, FlatButton, List, ListItem} from 'material-ui';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import OneJoke from '../components/OneJoke';
import { bindActionCreators } from 'redux';
import { categoriesList } from '../actions/categories';
import { selectedJoke } from '../actions/joke';
import { viewedJokes } from '../actions/viewedJokes';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = ({ categories: [], joke: {}, open: false })
    // this.displayJokes = this.displayJokes.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ categories: res.data });
          this.props.categoriesList(res.data);
        }
      })
      .catch(err => console.error(err));
  }

  getRandomJoke(category) {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => {
        const joke = res.data;
        if (joke) {
          this.setState({ joke: joke, open: true });
          this.props.selectedJoke(joke);
          this.props.viewedJokes(joke);
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
          subtitle="(click to toggle list)"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton primary={true} label="Jokes" onClick={() => this.props.history.push('/jokes')} />
          <FlatButton primary={true} label="Viewed" onClick={() => this.props.history.push('/viewed')} />
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

function mapStateToProps(state) {
  return {
    joke: state.joke,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ categoriesList, selectedJoke, viewedJokes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));