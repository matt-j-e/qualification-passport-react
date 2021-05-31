import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import Alert from "./Alert";
import getWorkers from "../requests/getWorkers";
import getWorkersByJobType from "../requests/getWorkersByJobType";

import {
  WorkersWrapper,
  Heading,
  JobSearchWrapper,
  JobSearchForm,
  WorkersList
} from "../styles/Workers";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState({
    message: "",
    isSuccess: false,
  });

  useEffect(() => {
    getWorkers().then((response) => {
      setWorkers(response.data);
    })
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value.replace(/[\W]/g, "")); // strips out non-alpha numeric
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setAlert({ message: "" });
    const sanitizedSearchText = searchText.replace(/[\W]/g, ""); // strips out non-alpha numeric
    getWorkersByJobType(sanitizedSearchText)
      .then((response) => {
        response.data.length > 0
        ? setWorkers(response.data)
        : setAlert({ message: `The search term ${searchText} returns no results.` })
      });
      setSearchText("");
  };

  const reloadAll = (event) => {
    getWorkers().then((response) => {
      setWorkers(response.data);
    });
  };

  return (
    <WorkersWrapper>
      <Heading>Workers</Heading>
      <JobSearchWrapper>
        <JobSearchForm onSubmit={handleSearchSubmit}>
        <h2>Job search form</h2>
          <input
            size="25"
            type="text"
            id="job-search"
            name="job-search"
            placeholder="Job type (a-z0-9 only)"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <input type="submit" value="Search" />
          <input type="button" value="Reload" onClick={reloadAll} />
        </JobSearchForm>
      </JobSearchWrapper>
      <Alert message={alert.message} />
      <WorkersList>
        {workers.map((worker) => {
          return (
            <WorkerCard
              key={worker.id}
              id={worker.id}
              firstname={worker.firstname}
              lastname={worker.lastname}
              job={worker.job} 
            />
          );
        })}
      </WorkersList>
    </WorkersWrapper>
  )
};

export default Workers;
