import { useState, useEffect } from "react";
import "./App.css";
import Tasks from "./component/Tasks";
import getApiTask from "./ApiGet";
function App() {
  const [dataInput, setDataInput] = useState("");
  const [dataTasks, setDataTasks] = useState([]);
  const [taskUpdate, setTaskUpdate] = useState();
  useEffect(() => {
    (async () => {
      const data = await getApiTask.getAllTask();
      setDataTasks(data?.data?.data);
    })();
  }, [dataTasks, taskUpdate]);
  const handleText = (e) => {
    e.preventDefault();
    if (dataInput === "") {
      alert("Nhiệm vụ không được để trống");
    } else {
      getApiTask.createTask(dataInput);
      setDataTasks([...dataTasks, { text: dataInput, isFinish: false }]);
      setDataInput("");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (dataInput !== "") {
      getApiTask.updateData(taskUpdate, dataInput);
      setDataInput("");
    }
  };
  return (
    <div className="text-red-500 flex flex-col justify-center mt-5 items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold text-[30px]">TODO TASK</h3>
        <form className="flex flex-col justify-center items-center">
          <input
            value={dataInput}
            onChange={(e) => setDataInput(e.target.value)}
            placeholder="Nhập nhiệm vụ"
            className="w-[300px] px-3 h-9 border border-gray-800 outline-none rounded-md"
          ></input>
          <button
            onClick={handleUpdate}
            className="w-[150px] h-9 bg-red-600 rounded-md mt-2 text-[17px] text-gray-100"
          >
            Chỉnh sửa
          </button>
          <button
            onClick={handleText}
            className="w-[150px] h-9 bg-red-600 rounded-md mt-2 text-[17px] text-gray-100"
          >
            Thêm Nhiệm Vụ
          </button>
        </form>
      </div>
      <Tasks
        setTaskUpdate={setTaskUpdate}
        setDataInput={setDataInput}
        setDataTasks={setDataTasks}
        dataTasks={dataTasks}
      ></Tasks>
    </div>
  );
}

export default App;
