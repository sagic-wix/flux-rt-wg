requirejs.config({
    baseUrl: './',
    paths: {
        lodash: 'lib/lodash/lodash.min',
        react: 'lib/react/react.min',
        promise: 'lib/es6-promise/promise.min',
        parse: '//www.parsecdn.com/js/parse-1.4.0.min'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'},
        promise: {exports: 'Promise'},
        parse: {exports: 'Parse'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', './app'], function (React, app) {
    'use strict';
    React.render(React.createElement(app), document.getElementById('appContainer'));
});