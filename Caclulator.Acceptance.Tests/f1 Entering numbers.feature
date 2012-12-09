
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
	| 9      |
	| 8      |
	| 7      |
	| 6      |
	| 5      |
	| 4      |
	| 3      |
	| 2      |
	| 1      |
	| 0      |

Scenario Outline: Adding two numbers
	Given I open the calculator
	When I calculate <calculation> 
	Then I see the result is <expected>
Examples:
	| calculation          | expected |
	| "1 + 1 ="            | 2        |
	| "11 + 31 ="          | 42       |
	| "11 + 31 + 8 ="      | 50       |
	| "11 + 31 + 8 + 33 =" | 83       |
	| "3 + 4 + "           | 7        |
