using NUnit.Framework;

namespace FFM_Mobile.AcceptanceTests.Tests.WorkDay
{
    [TestFixture]
    public class When_i_have_a_work_day_with_no_jobs : BaseAcceptanceTest
    {
        [SetUp]
        public void Setup()
        {
            base.DoSetup();
        }

        [TearDown]
        public void TearDown()
        {
            base.DoTearDown();
        }

        [Test]
        public void Then_i_see_no_jobs()
        {
            base.Fake.WorkDay.WithJobs(0).Build().Execute();

            var workDay = base.Api.GotoWorkDay();

            var hasNoWorkToday = workDay.HasNoScheduledWorkForToday();
            Assert.That(hasNoWorkToday, Is.True);
        }
    }
}