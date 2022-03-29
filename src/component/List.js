import React from 'react';
import store from '../redux/store';
import Item from './ListItem';
import { useSelector } from 'react-redux';

export default function List() {
  const items = useSelector((state) => state);

  function deleteItem(itemID) {
    store.dispatch({
      type: 'remove',
      payload: {
        id: itemID,
      },
    });
  }

  return (
    <div className="list">
      <h4>Your entrys appear here...</h4>
      {items.map((el) => {
        return (
          <Item
            delete={() => deleteItem(el.id)}
            content={el.description}
            time={el.time}
            key={el.id}
          />
        );
      })}
      <br />
    </div>
  );
}
