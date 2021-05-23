import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import Alert from "./Alert";
import getWorkers from "../requests/getWorkers";
import getWorkersByJobType from "../requests/getWorkersByJobType";

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
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setAlert({ message: "" });
    getWorkersByJobType(searchText)
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
          <input type="button" value="Reload all" onClick={reloadAll} />
        </form>
      </div>
      <Alert message={alert.message} />
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
