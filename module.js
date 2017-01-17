'use strict';

const fooBar = require('foobar'); // a non-existent module

function doStuff() {
    return foobar.method();
}

module.exports = doStuff;
