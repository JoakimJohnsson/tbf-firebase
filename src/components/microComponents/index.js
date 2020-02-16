import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Message = props => <div>{props.msg}</div>;

const TodoComponent = (props) => (
    <p className="todo-component"><FontAwesomeIcon icon="wrench" spin/><span>{props.todo}</span></p>
);

export default TodoComponent;
export {Message};

