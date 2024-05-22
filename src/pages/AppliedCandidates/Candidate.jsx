import axios from "axios";
import React, { useEffect, useState } from "react";

export const Candidate = ({ props, jobId }) => {
  const [candidateInfo, setCandidateInfo] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/candidate/${props}`
        );
        setCandidateInfo(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [props, jobId]);

  const handleChoose = (status) => async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/choose-candidate",
        {
          candidateId: candidateInfo.id,
          jobInfo: { jobId, status},
        }
      );
      // Update status state with the provided status
      setStatus(status);

      // Fetch updated status from the server
      const statusResponse = await axios.get("http://localhost:3000/getstatus", {
  params: {
    candidateId: candidateInfo.id,
    jobId: jobId
  }
});

      
      console.log("Updated status:", statusResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{candidateInfo.name}</h2>
      <p className="text-gray-700 mb-4">
        <b>Email: </b>
        {candidateInfo.email}
      </p>
      <p className="text-gray-500 mb-4">
        <b>Phone Number:</b> {candidateInfo.phone_number || "N/A"}
      </p>
      <p className="text-gray-500 mb-4">
        <b>Address:</b> {candidateInfo.location || "N/A"}
      </p>
      <p className="text-gray-500 mb-8">
        <b>Qualifications:</b>
        <ul>
          <li>{candidateInfo.qualification1 || "N/A"}</li>
          <li>{candidateInfo.qualification2 || "N/A"}</li>
          <li>{candidateInfo.qualification3 || "N/A"}</li>
          <li>{candidateInfo.qualification4 || "N/A"}</li>
        </ul>
      </p>

      {status !== null && <p className="font-bold">Status: {status}</p>}

      {status === null && (
        <div className="flex gap-6 mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleChoose(true)}
          >
            Accept
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleChoose(false)}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};
