import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './../store/actions/index';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import EditPage from './EditPage/EditPage';

import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="mainDiv">
                    <div className="container">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={MainBody} />
                            <Route path="/edit" exact component={EditPage} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTodos: () => dispatch(actions.getTodos())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(App);
