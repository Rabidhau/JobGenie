import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, JobCard} from "../../components";

const items = [
  {
    title: "What benefits does the JobGenie offer",
    content:
      "JobGenie offers various features from candidate listing, company listing, Applicant Tracking System, Interview Scheduling, candidate export, application deadline, apply with LinkedIn, email alert, Internship Alert, Profile Builder, Resume Builder, Resume Manager, Social App Login and many more.",
  },
  {
    title: "How will the department contact me?",
    content:
      "The department will primarily communicate with you through the email address and the phone you provided during the application process. Please ensure that your email is regularly monitored and the phone number is correct.    ",
  },
  {
    title: "How do I apply for a Internship opening?",
    content:
      "To apply for an internship opening, first, create an account on JobGenie.com. Browse through available internships, select one aligning with your interests, and follow the specified application instructions to submit your application. Good luck!",
  },
  {
    title: "How do I know if I am shortlisted?",
    content:
      "After submitting your application, we will notify shortlisted candidates via email or in-app notification. Please regularly check your inbox, including spam folders in email, for updates on your application status.      ",
  },
];

export const Home = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/show-all-jobs")
      .then(function (response) {
        setJobList(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main className="bg-gray-900 pt-40 pb-20">
      <div className="container mx-auto px-4">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 text-center">
            Explore thousands of properties across the globe
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center border-b border-gray-200 px-4">
              <input
                type="text"
                className="w-full py-4 px-6 focus:outline-none"
                placeholder="Enter the job title, company name..."
              />
              <button className="bg-gray-800 text-white px-6 py-2 hover:bg-gray-700 transition duration-300 rounded-sm">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white text-center leading-tight mb-4">
            Get your dream Job now
          </h1>
          <p className="text-lg md:text-md lg:text-xl text-gray-300 mb-8 text-center">
            Explore thousands of properties across the globe
          </p>

          <div className="grid grid-cols-3 gap-5">
            {jobList.map((list) => (
              <JobCard props={list} key={list.id} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white text-center leading-tight mb-8">
            How can we help you?
          </h1>

          <div className="grid grid-cols-3 gap-x-10">
            <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
              <img
                className=""
                src="https://internsathi.com/posting.svg"
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-black text-center">
                  Title
                </div>
                <p className="text-gray-800 text-base text-center">
                  Description lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
              <img
                className=""
                src="https://internsathi.com/hire-the-best.svg"
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-black text-center">
                  Title
                </div>
                <p className="text-gray-800 text-base text-center">
                  Description lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
              <img
                className=""
                src="https://internsathi.com/all-types-internship.svg"
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-black text-center">
                  Title
                </div>
                <p className="text-gray-800 text-base text-center">
                  Description lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white text-center leading-tight mb-8">
            Frequently Asked Question
          </h1>

          <Accordion items={items} />
        </section>
      </div>
    </main>
  );
};
