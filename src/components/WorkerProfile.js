import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase/app";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import AwardCard from "./AwardCard";
import AddAward from "./AddAward";
import getAwardsByWorker from "../requests/getAwardsByWorker";
import getWorker from "../requests/getWorker";
import formatDate from "../helpers/formatDate";
import sortAwards from "../helpers/sortAwards";
import deleteAward from "../requests/deleteAward";

import {
  WorkerProfileWrapper,
  Heading,
  Email,
  JobTitle,
  QualificationsHeader,
  Table
} from "../styles/WorkerProfile";

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
    award_date: 1,
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

  // const handleSortSelection = (event) => {
  //   const field = event.target.dataset.field;
  //   const order = sortOrder[field];
  //   setAwards(sortAwards([...awards], field, order)); // spread creates new array so React re-renders
  //   setSortOrder({[field]: order*-1}); // square brackets permit use of computed property name
  // };

  const handleSortSelection = (event) => {
    const field = event.target.dataset.field;
    console.log(sortOrder);
    setSortOrder((prev) => {
        const order = prev[field];
        setAwards([...sortAwards(awards, field, order)]);
        return { ...prev, [field]: order * -1 };
    });
  };

  return (
    <WorkerProfileWrapper>
      <Heading>{worker.firstname} {worker.lastname}</Heading>
      {/* <Email>{worker.email}</Email> */}
      <JobTitle>{worker.job}</JobTitle>
      <QualificationsHeader>-- Qualifications --</QualificationsHeader>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Awarding body</th>
            <th data-field="award_date" onClick={handleSortSelection}>Date awarded</th>
            <th data-field="expiry_date" onClick={handleSortSelection}>Expiry date</th>
            {currentUserEmail === worker.email && (
              <th>Delete</th>
            )}
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
      </Table>
      {currentUserEmail === worker.email && (
        <AddAward setAwards={setAwards} />
      )}
    </WorkerProfileWrapper>
  )
};

export default WorkerProfile;
