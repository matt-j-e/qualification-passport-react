import React, { useEffect, useState } from "react";
import getWorker from "../requests/getWorker";
import getExpiringAwardsByWorker from "../requests/getExpiringAwardsByWorker";
import { useParams, useHistory, Link } from "react-router-dom";

const WorkerAlert = () => {
  const { workerId } = useParams();
  const history = useHistory();

  const [worker, setWorker] = useState({});
  const [expiringAwards, setExpiringAwards] = useState([]);

  useEffect(() => {
    getExpiringAwardsByWorker(workerId)
      .then((res) => {
        console.log(res);
        if (res.data.length === 0) {
          history.push("/worker/" + workerId);
        } else {
          setExpiringAwards(res.data);
        }
      })
    getWorker(workerId).then((res) => {
      setWorker(res.data);
    })
  }, [workerId, history]);

  return (
    <div className="worker-alert-wrapper">
      <h2>Expiry alert</h2>
      <h3>Hi {worker.firstname}</h3>
      <p>We thought you would like to know that the following awards are due to expire within the next 4 weeks:</p>
      <ul>
        {expiringAwards.map((award) => {
          return (
            <li key={award.id}>{award.Qualification.name}</li>
          )
        })}
      </ul>
      <Link to={`/worker/${workerId}`}>Go to your profile</Link>
    </div>
  )

};

export default WorkerAlert;
