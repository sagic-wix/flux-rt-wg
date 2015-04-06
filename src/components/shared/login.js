define(['react', 'lodash', './login.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'login',

        propTypes: {
            onSuccessCallback: React.PropTypes.func.isRequired
        },

        getInitialState: function() {
            return {
                errorMessage: ''
            };
        },

        componentDidMount: function() {
            this.refs.usernameInp.getDOMNode().value = 'sagi1';
            this.refs.passwordInp.getDOMNode().value = 'sagi';
        },

        onLoginSubmit: function() {
            var username = this.refs.usernameInp.getDOMNode().value;
            var password = this.refs.passwordInp.getDOMNode().value;

            this.setState({errorMessage: ''});

            Parse.User.logIn(username, password, {
                success: function(user) {
                    this.props.onSuccessCallback(user);
                }.bind(this),
                error: function(user, error) {
                    this.setState({errorMessage: 'לא מכיר אותך'});
                }.bind(this)
            });
        },

        render: template
    });
});
