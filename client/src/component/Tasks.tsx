import { useEffect, useState } from "react";
import Task from "./Task";
const Tasks = ({ setTaskUpdate, setDataInput, dataTasks, setDataTasks }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {dataTasks?.length > 0 &&
        dataTasks.map((item, index) => {
          return (
            <div key={index}>
              <Task
                setTaskUpdate={setTaskUpdate}
                setDataInput={setDataInput}
                setDataTasks={setDataTasks}
                dataTasks={dataTasks}
                data={item}
              ></Task>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
