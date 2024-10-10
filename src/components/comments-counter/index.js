import React from 'react';
import './style.css';
export default function CommentCounter(props) {
  return <div className="CommentCounter">Комментарии({props.count})</div>;
}
