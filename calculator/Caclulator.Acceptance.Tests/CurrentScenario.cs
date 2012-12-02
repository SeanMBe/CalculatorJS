using OpenQA.Selenium;
using TechTalk.SpecFlow;

namespace Caclulator.Acceptance.Tests
{
    public static class CurrentScenario
    {
        public static IWebDriver WebDriver
        {
            get { return ScenarioContext.Current["webdriver"] as IWebDriver; }
            set { ScenarioContext.Current["webdriver"] = value; }
        }
    }
}
