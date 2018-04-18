import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render(props) {
    return (
      <div>
        {props.children}
      </div>
    )
  }
}

export default Main;