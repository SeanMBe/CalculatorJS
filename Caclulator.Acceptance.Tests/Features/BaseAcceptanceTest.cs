using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using FFM_Mobile.AcceptanceTests.Api.FFM;
using FFM_Mobile.AcceptanceTests.Api.Faking;
using FFM_Mobile.AcceptanceTests.Common;
using IISExpressAutomation;
using OpenQA.Selenium.Chrome;

namespace FFM_Mobile.AcceptanceTests.Tests
{
    public class BaseAcceptanceTest
    {
        private Action _killWindows;
        private IISExpress _iisExpress;
        private ChromeDriver _chromeDriver;

        public BaseAcceptanceTest()
        {
            var processesToKill = MavenThought.Commons.Extensions.Enumerable.Create("chrome", "chromedriver", "iisexpress");
            _killWindows = () => MavenThought.Commons.Extensions.Enumerable.ForEach(Process.GetProcesses().Where(p => Enumerable.Any(processesToKill, pk => p.ProcessName.ToLower() == pk)),
                                                                                    p => CatchException(p.Kill));
            Port = 8534;
            
            
        }

        protected void DoSetup()
        {
            _killWindows();

            var websitePath = GetRootPath(Environment.CurrentDirectory) + @"\Main_Site";
var parameters = new Parameters {Path = websitePath, Port = Port};
            _iisExpress = new IISExpress(parameters, @"..\..\..\Tools\iisexpress\iisexpress.exe");
            _chromeDriver = new ChromeDriver();
            var fakeUriGenerator = new UriGenerator(new Uri("http://localhost:{0}/functionaltests".Format(Port)));
            var ffmUriGenerator = new UriGenerator(new Uri("http://localhost:{0}".Format(Port)));
            Api = new FFMApi(ffmUriGenerator, _chromeDriver);
            Fake = new FakeBuilder(new FakeApi(fakeUriGenerator));
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

        protected void DoTearDown()
        {
            _iisExpress.Dispose();
            _chromeDriver.Dispose();
            _killWindows();
        }

        protected IFakeBuilder Fake { get; private set; }

        protected IFFMApi Api { get; private set; }

        public int Port { get; private set; }

        private void CatchException(Action action)
        {
            try
            {
                action();
            }
            catch (Exception)
            {
            }
        }

    }
}