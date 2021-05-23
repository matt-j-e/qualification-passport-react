import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase/app";
import { AuthContext } from "../context/AuthContext";
import AwardCard from "./AwardCard";
import AddAward from "./AddAward";
import { useParams } from "react-router-dom";
import getAwardsByWorker from "../requests/getAwardsByWorker";
import getWorker from "../requests/getWorker";

const WorkerProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    }
  });

  const { workerId } = useParams();

  let currentUserEmail;
  user ? currentUserEmail = user.email : currentUserEmail = "";

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

  // console.log(user);

  return (
    <div>
      <h2>{worker.firstname} {worker.lastname}</h2>
      <p>{worker.email}</p>
      <h3>{worker.job}</h3>
      {currentUserEmail === worker.email && (
        <AddAward setAwards={setAwards} />
      )}
      <h3>Qualifications</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Awarding body</th>
            <th>Date awarded</th>
            <th>Expiry date</th>
          </tr>
        </thead>
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
