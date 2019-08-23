const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItNumber(number) {
    return Number.isInteger(number);
}

Given('number is between 0-9', function () {
  this.number = 9;
});

When('is', function () {
  this.actualAnswer = isItNumber(this.number);
});

Then('number is {string}', function (expectedAnswer) {
  expectedAnswer = new Boolean(expectedAnswer);
  assert.equal(this.actualAnswer, expectedAnswer);
});