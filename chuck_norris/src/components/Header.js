import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onMenuClick = this.onMenuClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onMenuClick() {
    this.setState({ open: !this.state.open });
  }

  handleClick(option) {
    this.setState({ open: false });
    this.props.history.push(`/${option}`);
  }

  render() {
    return (
      <div>
        <AppBar title="Chuck Norris Jokes" onLeftIconButtonClick={() => this.onMenuClick()} onTitleClick={() => this.handleClick('')} />
        <Drawer open={this.state.open} onClick={() => this.setState({ open: !this.state.open })}>
          <MenuItem onClick={() => this.handleClick('')}>Home</MenuItem>
          <MenuItem onClick={() => this.handleClick('categories')}>Categories</MenuItem>
          <MenuItem onClick={() => this.handleClick('jokes')}>Jokes</MenuItem>
          <MenuItem onClick={() => this.handleClick('viewed')}>Viewed Jokes</MenuItem>
        </Drawer>
      </div>
    )
  }
};

export default withRouter(Header);