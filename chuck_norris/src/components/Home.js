import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Card, CardActions, CardMedia, CardText, FlatButton} from 'material-ui';

class Home extends Component {
  handleClick(option) {
    this.props.history.push(`/${option}`);
  }

  render () {
    return (
      <div>
        <Card>
          <CardMedia>
            <img src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small.png" alt="" />
          </CardMedia>
          <CardText>
          We love Chuck Norris jokes and you'll find a collection of those jokes here. You can find random jokes
          by category or by any specific term. To see the different categories of jokes click on the
          Categories button or select Categories from the Menu. To search for a joke click on the Jokes button
          or select Jokes from the Menu.
          </CardText>
          <CardActions>
            <FlatButton label="Categories" primary={true} onClick={() => this.handleClick('categories')} />
            <FlatButton label="Jokes" primary={true} onClick={() => this.handleClick('jokes')} />
            <FlatButton label="Viewed" primary={true} onClick={() => this.handleClick('viewed')} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withRouter(Home);