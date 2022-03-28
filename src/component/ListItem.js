import React from 'react';

export default function ListItem(props) {
  return (
    <div className="list-item">
      <p className="message">{props.content}</p>
      <button className="del-btn" onClick={props.delete}>
        X
      </button>
      <span className="time">{props.time}</span>
    </div>
  );
}
