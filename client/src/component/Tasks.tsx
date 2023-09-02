import { useEffect, useState } from "react";
import getApiTask from "../ApiGet";
import Task from "./Task";
const Tasks = () => {
  const [dataTasks, setDataTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getApiTask.getAllTask();
      setDataTasks(data?.data?.data);
    })();
  }, []);
  console.log(dataTasks);
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      {dataTasks?.length > 0 &&
        dataTasks.map((item, index) => {
          return (
            <div key={index}>
              <Task
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
