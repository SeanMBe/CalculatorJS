using System;
using System.Globalization;
using System.Linq;
using MavenThought.Commons.Extensions;
using NUnit.Framework;
using OpenQA.Selenium;
using TechTalk.SpecFlow;

namespace Caclulator.Acceptance.Tests
{
    [Binding]
    public class StepDefinitions
    {
        [When(@"I open the calculator")]
        [Given(@"I open the calculator")]
        public void WhenIOpenTheCalculator()
        {
            CurrentScenario.WebDriver.Navigate().GoToUrl("localhost:8534/");
        }
        
        [Then(@"I see the result is (.*)")]
        public void ThenISeeTheResultIs(int expected)
        {
            var actual = Convert.ToInt32(CurrentScenario.WebDriver.FindElement(By.Id("result")).Text);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [When(@"I enter (.*)")]
        public void WhenIEnter(int digits)
        {
            var number = CurrentScenario.WebDriver.FindElement(By.Id(digits.ToString()));
            number.Click();
        }

        [When(@"I calculate ""(.*)""")]
        public void WhenICalculate(string calculation)
        {
            calculation.ToList().Where(ch => ch != ' ').ForEach(PushButton);

        }

        private void PushButton(char button)
        {

            string id = button.ToString();
            id = button == '+' ? "add" : id;
            id = button == '=' ? "equals" : id;
            id = button == '-' ? "subtract" : id;

            var number = CurrentScenario.WebDriver.FindElement(By.Id(id));
            number.Click();
        }
    }

}



