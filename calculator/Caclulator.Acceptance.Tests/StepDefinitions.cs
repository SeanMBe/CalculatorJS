using System;
using Caclulator.Acceptance.Tests;
using NUnit.Framework;
using OpenQA.Selenium;
using TechTalk.SpecFlow;

namespace MyNamespace
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
    }
}



