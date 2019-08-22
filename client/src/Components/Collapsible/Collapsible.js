import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import * as actions from './../../store/actions/index';
import './Collapsible.css';

class Collapsible extends Component {
    componentDidMount() {
        this.props.onGetTodos();

        let elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        let elems2 = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems2, { position: 'bottom' });
    }

    renderTodos = () => {
        try {
            return _.map(this.props.todos, todo => {
                return (
                    <li key={todo._id}>
                        {todo.status ? (
                            <div className="collapsible-header statusTrueTitle">
                                <i className="material-icons">check</i>
                                {todo.title}
                            </div>
                        ) : (
                            <div className="collapsible-header statusFalseTitle">
                                <i className="material-icons">warning</i>
                                {todo.title}
                            </div>
                        )}
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <b>Description:</b> {todo.description}
                                    </span>
                                </div>
                                <div className="col s2 offset-s3">
                                    <div className="switch">
                                        <label>
                                            Undone
                                            <input
                                                type="checkbox"
                                                checked={todo.status}
                                                onChange={() =>
                                                    this.changeStatus(todo)
                                                }
                                            />
                                            <span className="lever" />
                                            Done
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <span>
                                        <b>Written by:</b> {todo.writer}
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l3 m3 s3">
                                    <button
                                        className="btn-medium btn editButtn"
                                        onClick={() =>
                                            this.props.onClickEdit(todo)
                                        }
                                    >
                                        <Link to="/edit" className="Link">
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </Link>
                                    </button>
                                </div>
                                <div className="col l3 m3 s3">
                                    <button
                                        className="btn-medium btn deleteButtn"
                                        onClick={() =>
                                            this.props.onDeleteTodo(todo)
                                        }
                                    >
                                        <i className="material-icons">cancel</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            });
        } catch (err) {
            console.log(err);
        }
    };

    changeStatus = todo => {
        this.props.onChangeStatus(todo);
    };

    render() {
        return <ul className="collapsible">{this.renderTodos()}</ul>;
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todoStore.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeStatus: todo => dispatch(actions.changeStatus(todo)),
        onClickEdit: todo => dispatch(actions.clickedTodo(todo)),
        onGetTodos: () => dispatch(actions.getTodos()),
        onDeleteTodo: todo => dispatch(actions.deleteTodo(todo))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collapsible);
