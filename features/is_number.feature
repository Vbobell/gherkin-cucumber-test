Feature: Is it number?

  Scenario: Is it number
    Given number is between 0-9
    When is number?
    Then number is 'true'