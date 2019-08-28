const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItString(str) {
    return !Number.isInteger(str);
}

Given('string is not number', function () {
  this.str = "6";
});

When('is string?', function () {
  this.actualAnswer = isItString(this.str);
});

Then('string is {string}', function (expectedAnswer) {
  expectedAnswer = new Boolean(expectedAnswer);
  assert.equal(this.actualAnswer, expectedAnswer);
});