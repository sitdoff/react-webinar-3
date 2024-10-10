import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';
import formatCommentDatetime from '../../utils/format-comment-datetime';

export default function Comment({ comment, callbacks }) {
  const cn = bem('Comment');
  return (
    <>
      <div className={cn()} style={{ marginLeft: comment.level * 20 }}>
        <div className={cn('head')}>
          <span className={cn('author')}>{comment.author.profile.name}</span>
          <span className={cn('date')}>
            {formatCommentDatetime(comment.dateCreate)} {comment.level}
          </span>
        </div>
        <div className={cn('text')}>{comment.text}</div>
        <div className={cn('reply')}>
          <a href="#" onClick={e => callbacks.handleReplyClick(e, comment._id)}>
            Ответить
          </a>
        </div>
      </div>
    </>
  );
}
