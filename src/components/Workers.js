import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import getWorkers from "../requests/getWorkers";
import getWorkersByJobType from "../requests/getWorkersByJobType";

const Workers = () => {
  const [workers, setworkers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getWorkers().then((response) => {
      setworkers(response.data);
    })
  }, []);

  // const list = workers.map((worker) => {
  //   return <li key={worker.id}>{worker.firstname} {worker.lastname} {worker.job}</li>
  // });

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getWorkersByJobType(searchText)
      .then((response) => {
        setworkers(response.data);
      });
      setSearchText("");
  };

  const reloadAll = (event) => {
    getWorkers().then((response) => {
      setworkers(response.data);
    });
  };

  return (
    <section>
      <h1>Workers</h1>
      <div className="job-search-wrapper">
        <form className="job-search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="job-search"
            name="job-search"
            placeholder="eg. Lifeguard"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <input type="submit" value="Search" />
          
        </form>
        <button type="button" onClick={reloadAll}>Reload all</button>
      </div>
      <ul>
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
      </ul>
    </section>
  )
};

export default Workers;
