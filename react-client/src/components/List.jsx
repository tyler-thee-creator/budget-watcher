import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Current Week Overview: </h4>
    { props.currentWeekLog.map(stat => <ListItem key={stat.id} stat={stat}/>)}
  </div>
);

export default List;