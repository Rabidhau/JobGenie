import { notifications } from "@mantine/notifications";
import axios from "axios";
import clsx from "clsx";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobCard } from "../../components";

export const IndividualJob = () => {
  const [jobInfo, setJobInfo] = useState([]);
  const [jobList, setJobList] = useState([]);

  const { id } = useParams();

  const handleApply = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.post("http://localhost:3000/apply-job", {
        jobId: id,
        applicantId: userId,
      });

      // If login successful, navigate to the desired route and store user data in local storage
      if (response.status === 200) {
        notifications.show({
          title: "Job Applied Successfully",
          message: `${response.data} :)`,
        });
      } else {
        notifications.show({
          title: "Error Applying Job",
          message: `${response.data} :(`,
        });
      }
    } catch (error) {
      notifications.show({
        title: "Error Applying Job",
        message: error?.response?.data || `Something went wrong :(`,
        color: "red",
      });
      console.error(error);
    }
  };

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

  useEffect(() => {
    if (id)
      axios
        .get("http://localhost:3000/show-job/" + id)
        .then(function (response) {
          setJobInfo(response?.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-900 pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold">{jobInfo.jobTitle}</h2>
            <p className="text-gray-600 mb-2">{jobInfo.companyName}</p>
            <p className="text-gray-600 mb-2">{jobInfo.location}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Job Details</h3>
              <p>{jobInfo.jobDetails}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Requirements</h3>
              <ul className="list-disc ml-5">
                <li>{jobInfo.requirement1}</li>
                <li>{jobInfo.requirement2}</li>
                <li>{jobInfo.requirement3}</li>
                <li>{jobInfo.requirement4}</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p>{jobInfo.emailAddress}</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-semibold">Submit by</h3>
              <p>{dayjs(jobInfo.submitBy).format("DD MMM, YYYY")}</p>
            </div>

            <button
              className={clsx(
                "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                dayjs(jobInfo.submitBy).isBefore(new Date())
                  ? "bg-gray-600 pointer-events-none"
                  : " bg-indigo-600"
              )}
              disabled={dayjs(jobInfo.submitBy).isBefore(new Date())}
              onClick={handleApply}
            >
              Apply Now
            </button>

            {dayjs(jobInfo.submitBy).isBefore(new Date()) && (
              <p className="text-red-500">This job is expired</p>
            )}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight mt-12 mb-8">
          Recommended jobs
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {jobList.slice(0, 3).map((list) => (
            <JobCard props={list} key={list.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
