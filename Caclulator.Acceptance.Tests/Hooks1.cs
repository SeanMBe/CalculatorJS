using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using IISExpressAutomation;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace Caclulator.Acceptance.Tests
{
    [Binding]
    public class Hooks1
    {
        private Action _killWindows;
        private int _port;
        private IISExpress _iisExpress;
        private ChromeDriver _chromeDriver;
        // For additional details on SpecFlow hooks see http://go.specflow.org/doc-hooks

        [BeforeScenario]
        public void BeforeScenario()
        {
            var processesToKill = MavenThought.Commons.Extensions.Enumerable.Create("chrome", "chromedriver", "iisexpress");
            _killWindows = () => MavenThought.Commons.Extensions.Enumerable.ForEach(Process.GetProcesses().Where(p => Enumerable.Any(processesToKill, pk => p.ProcessName.ToLower() == pk)),
                p => CatchException(p.Kill));
            _port = 8534;

            var websitePath = GetRootPath(Environment.CurrentDirectory) + @"\Calculator";
            var parameters = new Parameters { Path = websitePath, Port = _port };
            _iisExpress = new IISExpress(parameters, @"..\..\..\Tools\iisexpress\iisexpress.exe");
            _chromeDriver = new ChromeDriver();

            CurrentScenario.WebDriver = _chromeDriver;
        }

        [AfterScenario]
        public void AfterScenario()
        {
            CatchException(() => _iisExpress.Dispose());
            _chromeDriver.Dispose();
            _killWindows();
        }

        public void CatchException(Action action)
        {
            try
            {
                action();
            }
            catch (Exception)
            {
            }
        }

        //todo: find a better way
        private string GetRootPath(string currentDirectory)
        {
            var slashCount = 0;
            var i = currentDirectory.Length - 1;
            while (slashCount < 3)
            {
                i--;
                slashCount += currentDirectory[i] == '\\' ? 1 : 0;
            }

            return currentDirectory.Substring(0, i);
        }
    }
}
