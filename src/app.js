define(['react', 'lodash', 'parse', './app.rt'], function (React, _, Parse, template) {
    'use strict';

    var PAGES = {
        LOGIN: 'login',
        PLAYER_HOME: 'player_home',
        DIRECTOR_HOME: 'director_home',
        PRESS_HOME: 'press_home'
    };

    return React.createClass({
        displayName: 'app',

        PAGES: PAGES,

        getInitialState: function() {
            return {
                currentPage: PAGES.LOGIN,
                user: null,
                pressArticles: []
            };
        },

        componentDidMount: function () {
            this.bootstrap();
        },

        bootstrap: function () {
            Parse.initialize("RXuHMznARlYm3DsTPZxZHvynLEc2v5AWZb6eg2B5", "gg9Mma6fX0Mv4UvtlUwYiMYYs4z3114ty5a625YB");
        },

        onLoginSuccess: function (user) {
            var wgTypesPageMap = {
                player: PAGES.PLAYER_HOME,
                director: PAGES.DIRECTOR_HOME,
                press: PAGES.PRESS_HOME
            };

            var toPage = wgTypesPageMap[user.get('wg_type')];

            this.setState({
                currentPage: toPage,
                user: user
            });

            this.getRecentUpdates();
        },

        getRecentUpdates: function () {
            var PressArticle = Parse.Object.extend("PressArticle");
            var query = new Parse.Query(PressArticle);
            query.descending("dateIssue");
            query.find({
                success: function(results) {
                    this.setState({
                        pressArticles: results
                    });
                }.bind(this),
                error: function(error) {
                }
            });

        },

        render: template
    });
});
