using NUnit.Framework;

namespace FFM_Mobile.AcceptanceTests.Tests.WorkDay
{
    [TestFixture]
    public class When_i_have_a_work_day_with_jobs : BaseAcceptanceTest
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

        [TestCase(1)]
        [TestCase(2)]
        [TestCase(3)]
        [TestCase(15)]
        [TestCase(200)]
        public void Then_i_see_expected_jobs(int expectedJobs)
        {
            base.Fake.WorkDay.WithJobs(expectedJobs).Build().Execute();

            var workDay = base.Api.GotoWorkDay();

            var jobCountInLabel = workDay.GetJobCount();
            var jobSummariesCount = workDay.GetJobSummariesCount();
            Assert.That(jobCountInLabel, Is.EqualTo(expectedJobs));
            Assert.That(jobSummariesCount, Is.EqualTo(expectedJobs));
        }
    }
}