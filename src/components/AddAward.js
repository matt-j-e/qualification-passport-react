import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase/app";
import { AuthContext } from "../context/AuthContext";
import getQualifications from "../requests/getQualifications";
import postAward from "../requests/postAward";

import {
  AddAwardWrapper,
  AddAwardHeading,
  Form
} from "../styles/AddAward";

const AddAward = ({ setAwards }) => {
  const { user, setUser } = useContext(AuthContext);

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    }
  });

  const initialState = {
    fields: {
      award_date: "",
      expiry_date: "",
      QualificationId: 0,
      WorkerId: user.uid,
    }
  };
  const [fields, setFields] = useState(initialState.fields);
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
    getQualifications()
      .then((res) => {
        setQualifications(res.data);
      })
  }, []);

  // need to add an element to the beginning of the qualifications array
  // to enable the first Qual to be selected. Previously it was referencing
  // id of 0 which doesn't exist. 
  const dropdownChoices = [...qualifications];
  dropdownChoices.unshift({
    id: 0,
    name: "Choose qualification",
  });
  const qualificationOptions = dropdownChoices.map((qualification) => {
    return (
      <option
        key={qualification.id}
        value={qualification.id}
      >
        {qualification.name}
      </option>
    )
  });

  const handleFieldChange = (event) => {
    setFields((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleAddAward = (event) => {
    event.preventDefault();
    console.log(fields);
    postAward(fields)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          const addedQualification = qualifications.find(q => q.id.toString() === response.data.QualificationId);
          setAwards((prev) => [
            ...prev, 
            {
              id: response.data.id,
              award_date: response.data.award_date,
              expiry_date: response.data.expiry_date,
              Qualification: {
                name: addedQualification.name,
                awarding_body: addedQualification.awarding_body,
              }
            }
          ]);
          setFields(initialState.fields);
        }
      });
  };

  return (
    <AddAwardWrapper>
      <AddAwardHeading>Add a qualification</AddAwardHeading>
      <Form className="add-property-form" onSubmit={handleAddAward}>
        <div>
          <label htmlFor="QualificationId">
            
            <select
              id="QualificationId"
              name="QualificationId"
              value={fields.QualificationId}
              onChange={handleFieldChange}
            >
              {qualificationOptions}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="award_date">
            Date awarded
            <input
              type="date"
              id="award_date"
              name="award_date"
              placeholder="Date awarded"
              value={fields.award_date}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="expiry_date">
            Expiry date
            <input
              type="date"
              id="expiry_date"
              name="expiry_date"
              placeholder="Expiry date"
              value={fields.expiry_date}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <button type="submit">Add</button>
      </Form>
    </AddAwardWrapper>
  )

};

export default AddAward;
