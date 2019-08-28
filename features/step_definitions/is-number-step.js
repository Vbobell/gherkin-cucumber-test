const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItNumber(number) {
    return Number.isInteger(number);
}

Given('que o número está entre 0-9', function () {
  this.number = 9;
});

When('é número?', function () {
  this.actualAnswer = isItNumber(this.number);
});

Then('número é {string}', function (expectedAnswer) {
  expectedAnswer = new Boolean(expectedAnswer);
  assert.equal(this.actualAnswer, expectedAnswer);
});