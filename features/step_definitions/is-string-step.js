const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItString(str) {
    return !Number.isInteger(str);
}

Given('que o texto não é um número', function () {
  this.str = "6";
});

When('é texto?', function () {
  this.actualAnswer = isItString(this.str);
});

Then('texto é {string}', function (expectedAnswer) {
  expectedAnswer = new Boolean(expectedAnswer);
  assert.equal(this.actualAnswer, expectedAnswer);
});