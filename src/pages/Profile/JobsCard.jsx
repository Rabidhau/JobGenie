import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobsCard = ({ props }) => {
  const [candidateID, setCandidateID] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/get-applicants/" + props.id
        );
        setCandidateID(JSON.parse(response?.data?.candidateID) || []);
      } catch (error) {
        console.error("Error:", error);
        setCandidateID([]); // Set candidateID to empty array in case of error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <div className="bg-white shadow-md rounded-lg p-6" key={props.id}>
      <h2 className="text-xl font-bold mb-2">{props.jobTitle}</h2>
      <p className="text-gray-700 mb-4">{props.jobDetails}</p>
      <p className="text-gray-500 mb-4">
        Total Applicants: {candidateID.length}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/applied-candidate/" + props.id)}
      >
        Read more
      </button>
    </div>
  );
};

export default JobsCard;
