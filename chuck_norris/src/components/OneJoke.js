import React from 'react';
import { Avatar, Card, List, ListItem } from 'material-ui';

const OneJoke = ({joke}) => {
  if (Object.keys(joke).length > 0) {
    return (
      <Card>
        <List>
          <ListItem
            key={joke.id}
            primaryText={joke.value}
            leftAvatar={<Avatar src={joke.icon_url} />}
          />
        </List>
        {joke.value}
      </Card>
      
    )
  } else {
    return <div />
  }
};

export default OneJoke;