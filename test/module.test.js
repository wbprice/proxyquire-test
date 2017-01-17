'use strict';

require('mocha');
const proxyquire = require('proxyquire');
const desiredResult = 'output proxyquired!'

const doStuff = proxyquire('./../module', {
    'foo/bar': {
        method: function() {
            return desiredResult;
        }
    }
});

describe('The Module', function() {
    it('should return output', function() {
        expect(doStuff()).to.equal(desiredResult);
    });
});
