import React, { useEffect, useState } from "react";
import AwardCard from "./AwardCard";
import {  useParams } from "react-router-dom";
import getAwardsByWorker from "../requests/getAwardsByWorker";
import getWorker from "../requests/getWorker";

const WorkerProfile = () => {
  const { workerId } = useParams();

  const [worker, setWorker] = useState({});
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    getWorker(workerId).then((res) => {
      setWorker(res.data);
    })
    getAwardsByWorker(workerId).then((res) => {
      setAwards(res.data);
    })
  }, [workerId]);

  // console.log(awards[0].Qualification);

  return (
    <div>
      <h2>{worker.firstname} {worker.lastname}</h2>
      <h3>Qualifications</h3>
      <table>
        <tbody>
          {awards.map((award) => {
            return (
              <AwardCard
                key={award.id} 
                name={award.Qualification.name}
                awardingBody={award.Qualification.awarding_body}
                awardDate={award.award_date}
                expiryDate={award.expiry_date}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default WorkerProfile;
