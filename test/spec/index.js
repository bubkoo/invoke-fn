'use strict';

var expect = require('chai').expect;


describe('invoke-fn: ', function () {

  var invoke = require('../../');

  it('common', function () {

    expect(invoke(function () {
      return 1;
    }, null)).to.be.equal(1);

    expect(invoke(function (val) {
      return val;
    }, null, [1])).to.be.equal(1);

    expect(invoke(function (a, b) {
      return a + b;
    }, null, [1, 2])).to.be.equal(3);

    expect(invoke(function (a, b, c) {
      return a + b + c;
    }, null, [1, 2, 3])).to.be.equal(6);

    expect(invoke(function (a, b, c, d) {
      return a + b + c + d;
    }, null, [1, 2, 3, 4])).to.be.equal(10);

    var obj = {
      add: function () {
        var result = 0;
        for (var i = 0, length = arguments.length; i < length; i++) {
          result += arguments[i]
        }
        return result;
      }
    }

    expect(invoke(function (a, b, c, d) {
      return this.add(a, b, c, d);
    }, obj, [1, 2, 3, 4])).to.be.equal(10);
  });
});
