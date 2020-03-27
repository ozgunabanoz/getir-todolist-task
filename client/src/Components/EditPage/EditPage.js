import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/index';
import './EditPage.css';

class EditPage extends Component {
  state = {
    todo: {}
  };

  componentDidMount() {
    this.setState({ todo: this.props.todo });
  }

  onChangeHandler = (event, input) => {
    const updElement = {
      ...this.state.todo,
      [input]: event.target.value
    };

    this.setState({ todo: updElement });
  };

  onSubmitHandler = () => {
    this.props.onEditTodo(this.state.todo);
  };

  render() {
    return (
      <div
        className="container editPageCont"
        style={{
          width: '95%',
          padding: '1%',
          textAlign: 'center',
          margin: '10px'
        }}
      >
        <form
          className="col s12"
          autoComplete="off"
          onSubmit={this.onSubmitHandler}
        >
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Title"
                id="title"
                type="text"
                className="validate"
                value={this.state.todo.title}
                onChange={event =>
                  this.onChangeHandler(event, 'title')
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Description"
                id="description"
                type="text"
                className="validate"
                value={this.state.todo.description}
                onChange={event =>
                  this.onChangeHandler(event, 'description')
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Writer"
                id="writer"
                type="text"
                className="validate"
                value={this.state.todo.writer}
                onChange={event =>
                  this.onChangeHandler(event, 'writer')
                }
              />
            </div>
          </div>
          <div className="row">
            <button
              className="modal-close waves-effect waves-green btn confirmButtn"
              type="submit"
              onClick={() => this.onSubmitHandler()}
            >
              <Link className="editLink" to="/">
                Confirm
              </Link>
            </button>
            <button
              className="modal-close waves-effect waves-green btn cancelButtn"
              type="button"
            >
              <Link className="editLink" to="/">
                Go Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todoStore.clickedTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditTodo: todo => dispatch(actions.editTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
