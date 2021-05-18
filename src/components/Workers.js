import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import getWorkers from "../requests/getWorkers";

const Workers = () => {
  const [workers, setworkers] = useState([]);

  useEffect(() => {
    getWorkers().then((res) => {
      setworkers(res.data);
    })
  }, []);

  // const list = workers.map((worker) => {
  //   return <li key={worker.id}>{worker.firstname} {worker.lastname} {worker.job}</li>
  // });

  return (
    <section>
      <h1>Workers</h1>
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
