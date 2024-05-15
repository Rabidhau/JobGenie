import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Candidate } from "./Candidate";

export const AppliedCandidates = () => {
  const [jobInfo, setJobInfo] = useState([]);

  const { id } = useParams();

  const [candidateID, setCandidateID] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/get-applicants/" + id
        );
        setCandidateID(JSON.parse(response?.data?.candidateID) || []);
      } catch (error) {
        console.error("Error:", error);
        setCandidateID([]); // Set candidateID to empty array in case of error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once on component mount

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

  return (
    <main className="bg-gray-900 pt-40 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-white">Job Information</h1>
        <div className="mx-auto text-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold">{jobInfo.jobTitle}</h2>
            <p className="mb-2">{jobInfo.companyName}</p>
            <p className="mb-2">{jobInfo.location}</p>
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
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-10 text-white">
          Applied Candidates
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {candidateID.map((id) => (
            <Candidate props={id} key={id} jobId={id} />
          ))}
        </div>
      </div>
    </main>
  );
};
