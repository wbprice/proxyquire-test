'use strict';

const fooBar = require('foo/bar'); // a non-existent module

function doStuff() {
    return fooBar.method();
}

module.exports = doStuff;
