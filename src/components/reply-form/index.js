import React from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';
import { useState, useEffect, useRef } from 'react';
import useSelector from '../../hooks/use-selector';

export default function ReplyForm({ parent, cancelButton, isOpen, callbacks }) {
  const [text, setText] = useState('');
  const formRef = useRef();

  const cn = bem('ReplyForm');

  const selectCustom = useSelector(state => ({
    user: state.session.user,
    exists: state.session.exists,
  }));

  useEffect(() => {
    if (isOpen && formRef.current) {
      formRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [isOpen]);

  if (selectCustom.exists) {
    return (
      <div
        ref={formRef}
        className={cn()}
        style={{ marginLeft: parent.level ? parent.level * 20 : 0 }}
      >
        <div className={cn('label')}>Новый {cancelButton ? 'ответ' : 'комментарий'}</div>
        <div className={cn('textarea')}>
          <form>
            <textarea
              onChange={e => callbacks.handleTextChange(e, setText)}
              value={text}
            ></textarea>
            <button onClick={e => callbacks.handleSubmit(e, text, parent, selectCustom.user)}>
              Отправить
            </button>
            {cancelButton ? <button onClick={callbacks.handleCancelClick}>Отмена</button> : ''}
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div
        ref={formRef}
        className={cn('no-session')}
        style={{ marginLeft: parent.level ? parent.level * 20 : 0 }}
      >
        <a className={cn('link')} href="#" onClick={callbacks.onSignIn}>
          Войдите
        </a>
        , чтобы иметь возможность {cancelButton ? 'ответить' : 'комментировать'}.{' '}
        <a className={cn('cancel-link')} href="#" onClick={callbacks.handleCancelClick}>
          {cancelButton ? 'Отмена' : ''}
        </a>
      </div>
    );
  }
}
