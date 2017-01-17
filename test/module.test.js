'use strict';

require('mocha');
const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const desiredResult = 'output proxyquired!'

const doStuff = proxyquire('./../module', {
    'foo/bar': {
        method: function() {
            return desiredResult;
        }, '@noCallThru': true
    }
});

describe('The Module', function() {
    it('should return the correct output', function() {
        expect(doStuff()).to.equal(desiredResult);
    });
});
