import axios from "axios";
import React, { useState, useEffect } from "react";

import { baseUrl } from "../../utils/config";
import { data } from "../../staticData";

const ViewAllTasks = () => {
  const [ViewAllTasks, setViewAllTasks] = useState([]);

  //   useEffect(() => {
  //     const fetchAllTasks = async () => {
  //       const { data } = await axios.get(`${baseUrl}/get_tasks`);
  //       console.log(data.message);
  //     };

  //     fetchAllTasks();
  //   }, [ViewAllTasks]);

  return (
    <section className="flex flex-col items-center mt-5">
      <h1 className="text-center text-xl font-bold">
        View your tasks for today
      </h1>
      <table>
        {data.map(({ summary, start, end }) => {
          const startTimeStamp = start.split("T")[1].split("-")[0].split(":");
          const startTime = `${startTimeStamp[0]}:${startTimeStamp[1]}`;
          const endTimeStamp = end.split("T")[1].split("-")[0].split(":")
          const endTime = `${endTimeStamp[0]}:${endTimeStamp[1]}`;
          return (
            <tr>
              <th>
                {startTime} -{" "}
                {endTime}
              </th>
              <td className="pl-5">{summary}</td>
            </tr>
          );
        })}
      </table>
      <a
        href="http://localhost:3000"
        target="_blank"
        rel="noreferrer"
        className="text-center underline text-sky-600 mb-5"
      >
        Open as a website
      </a>
    </section>
  );
};

export default ViewAllTasks;
