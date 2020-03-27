import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/index';
import './AddModal.css';

class AddModal extends Component {
  state = {
    form: { title: '', description: '', writer: '' }
  };

  componentDidMount() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    let elems2 = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems2, { position: 'left' });
  }

  onChangeHandler = (event, input) => {
    const updatedElement = {
      ...this.state.form,
      [input]: event.target.value
    };

    this.setState({ form: updatedElement });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onPostTodos(this.state.form);
    this.setState({
      form: {
        title: '',
        description: '',
        writer: ''
      }
    });
  };

  render() {
    return (
      <div>
        <a
          className="btn-floating btn-large btn modal-trigger tooltipped"
          href="#modal1"
          data-tooltip="Add a new todo"
        >
          <i className="large material-icons">mode_edit</i>
        </a>
        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
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
                    value={this.state.form.title}
                    onChange={event =>
                      this.onChangeHandler(event, 'title')
                    }
                    required
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
                    value={this.state.form.description}
                    onChange={event =>
                      this.onChangeHandler(event, 'description')
                    }
                    required
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
                    value={this.state.form.writer}
                    onChange={event =>
                      this.onChangeHandler(event, 'writer')
                    }
                    required
                  />
                </div>
              </div>
              <div className="row">
                <button
                  href="#!"
                  className="modal-close waves-effect waves-green btn green darken-2"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostTodos: todo => dispatch(actions.postTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(AddModal);
