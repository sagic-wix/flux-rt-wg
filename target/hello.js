define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',
        getInitialState: function() {
            return {
                ok: 1
            };
        },
        render: template
    });
});
