'use strict';

const proxyquire = require('proxyquire');

const DoStuff = proxyquire('./module', {
    'foo/bar': {
        method: function() {
            return 'output proxyquired!';
        }
    }
});
