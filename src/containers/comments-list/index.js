import React from 'react';
import Comment from '../../components/comment';
import commentsListToTree from '../../utils/comments-list-to-tree';
import ReplyForm from '../../components/reply-form';
import { useSelector } from 'react-redux';

export default function CommentsList({ list, callbacks, article }) {
  const select = useSelector(state => ({
    activeComment: state.reply.comment,
  }));

  if (list) {
    const tree = commentsListToTree(list);

    const renderComments = comments => {
      return comments.map(comment => (
        <div key={comment._id}>
          <Comment comment={comment} callbacks={callbacks} />
          {comment.children && comment.children.length > 0 && (
            <div className="children">{renderComments(comment.children)}</div>
          )}
          {select.activeComment === comment._id && (
            <ReplyForm parent={comment} cancelButton={true} isOpen={true} callbacks={callbacks} />
          )}
        </div>
      ));
    };

    return (
      <>
        {renderComments(tree)}
        {select.activeComment ? '' : <ReplyForm parent={article} callbacks={callbacks} />}
      </>
    );
  }
}
