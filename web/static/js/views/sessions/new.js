import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import {
  setDocumentTitle,
  creditsText }             from '../../utils';
import Actions              from '../../actions/sessions';

class SessionsNewView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign in');
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(email.value, password.value));
  }

  _renderError() {
    let { error } = this.props;

    if (!error) return false;

    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    return (
      <div id="sessions_new_view" className="view-container">
        <div className="form-wrapper">
          <div className="inner">
            <header>
              <div className="logo" />
              {creditsText()}
            </header>
            <form id="sign_in_form" onSubmit={::this._handleSubmit}>
              {::this._renderError()}
              <div className="field">
                <input
                  ref="email"
                  type="Email"
                  id="user_email"
                  placeholder="Email"
                  required="true"/>
              </div>
              <div className="field">
                <input
                  ref="password"
                  type="password"
                  id="user_password"
                  placeholder="Password"
                  required="true"/>
              </div>
              <button type="submit">Sign in</button>
            </form>
          </div>
          <Link to="/sign_up">Create new account</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(SessionsNewView);
