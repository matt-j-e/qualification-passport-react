import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase/app";
import { AuthContext } from "../context/AuthContext";
import AwardCard from "./AwardCard";
import AddAward from "./AddAward";
import { useParams } from "react-router-dom";
import getAwardsByWorker from "../requests/getAwardsByWorker";
import getWorker from "../requests/getWorker";
import formatDate from "../helpers/formatDate";
import sortAwards from "../helpers/sortAwards";
import deleteAward from "../requests/deleteAward";

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
  const [sortOrder, setSortOrder] = useState({
    expiry_date: 1,
  });

  useEffect(() => {
    getWorker(workerId).then((res) => {
      setWorker(res.data);
    })
    getAwardsByWorker(workerId).then((res) => {
      setAwards(res.data);
    })
  }, [workerId]);

  const handleAwardDelete = (event) => {
    const deleteId = event.target.dataset.id;
    deleteAward(deleteId)
      .then((response) => {
        if (response.status === 204) {
          const trs = document.querySelectorAll("tr");
          trs.forEach((tr) => {
            if (tr.dataset.award === deleteId) {
              tr.remove();
            }
          })
        }
      })
  };

  const handleSortSelection = (event) => {
    const field = event.target.dataset.field;
    const order = sortOrder[field];
    // awards spread required so that React thinks there's a new array and rerenders
    setAwards(sortAwards([...awards], field, order));
    setSortOrder({[field]: order*-1}); // square brackets permit use of computed property name
  };

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
            <th data-field="expiry_date" onClick={handleSortSelection}>Expiry date</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award) => {
            return (
              <AwardCard
                key={award.id}
                id={award.id}
                name={award.Qualification.name}
                awardingBody={award.Qualification.awarding_body}
                awardDate={formatDate(award.award_date)}
                expiryDate={formatDate(award.expiry_date)}
                handleDelete={handleAwardDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default WorkerProfile;
