
Feature: Entering numbers
	In order do math calculations
	As a math idiot
	I want to be able to enter numbers


Scenario: Opening the calculator
	When I open the calculator
	Then I see the result is 0

Scenario Outline: Entering a number
	Given I open the calculator
	When I enter <number>
	Then I see the result is <number>
	Examples:
	| number |
	| 8      |
	| 7      |
	| 6      |
