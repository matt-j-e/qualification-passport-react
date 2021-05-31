import React, { useEffect, useState } from "react";
import getWorker from "../requests/getWorker";
import getExpiringAwardsByWorker from "../requests/getExpiringAwardsByWorker";
import { useParams, useHistory, Link } from "react-router-dom";

import {
  WorkerAlertWrapper,
  WorkerAlertHeading,
  WorkerGreeting,
  AlertMessage,
  AlertList
} from "../styles/WorkerAlert";

const WorkerAlert = () => {
  const { workerId } = useParams();
  const history = useHistory();

  const [worker, setWorker] = useState({});
  const [expiringAwards, setExpiringAwards] = useState([]);

  useEffect(() => {
    getExpiringAwardsByWorker(workerId)
      .then((res) => {
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
    <WorkerAlertWrapper>
      <WorkerAlertHeading>Expiry alert</WorkerAlertHeading>
      <WorkerGreeting>Hi {worker.firstname}</WorkerGreeting>
      <AlertMessage>We thought you would like to know that the following awards are due to expire within the next 4 weeks:</AlertMessage>
      <AlertList>
        {expiringAwards.map((award) => {
          return (
            <li key={award.id}>{award.Qualification.name}</li>
          )
        })}
      </AlertList>
      <Link to={`/worker/${workerId}`}>Go to your profile</Link>
    </WorkerAlertWrapper>
  )

};

export default WorkerAlert;
