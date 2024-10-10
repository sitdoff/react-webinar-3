import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInit from '../../hooks/use-init';
import commentsActions from '../../store-redux/comments/actions';
import shallowequal from 'shallowequal';
import CommentCounter from '../../components/comments-counter';
import CommentsList from '../../containers/comments-list';
import CommentsLayout from '../../components/comment-layout';
import ReplyActions from '../../store-redux/reply/actions.js';
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Comments(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  useInit(() => {
    dispatch(commentsActions.load(props.id));
  }, [props.id]);

  const select = useSelector(
    state => ({
      comments: state.comments.data.items,
      count: state.comments.data.count,
      waiting: state.comments.waiting,
      reply: state.reply.comment,
      article: state.article.data,
    }),
    shallowequal,
  );

  const callbacks = {
    openReply: useCallback(id => {
      dispatch(ReplyActions.open(id));
    }, []),

    closeReply: useCallback(() => {
      dispatch(ReplyActions.close());
    }, []),

    onSignIn: useCallback(
      e => {
        e.preventDefault();
        navigate('/login', { state: { back: location.pathname } });
      },
      [location.pathname],
    ),

    handleReplyClick: useCallback(
      (e, commentId) => {
        e.preventDefault();
        if (select.reply === commentId) {
          callbacks.closeReply();
        } else {
          callbacks.openReply(commentId);
        }
      },
      [select.reply, callbacks],
    ),

    handleTextChange: useCallback((e, setText) => {
      setText(e.target.value);
    }),

    handleSubmit: useCallback((e, text, parent, author) => {
      e.preventDefault();
      dispatch(commentsActions.create(text, parent, author.profile.name)).then(() => {
        callbacks.closeReply();
      });
    }),

    handleCancelClick: useCallback(e => {
      e.preventDefault();
      callbacks.closeReply();
    }),
  };

  return (
    <CommentsLayout>
      <CommentCounter count={select.count} />
      <CommentsList list={select.comments} callbacks={callbacks} article={select.article} />
    </CommentsLayout>
  );
}
