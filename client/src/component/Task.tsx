import getApiTask from "../ApiGet";
const Task = ({
  setTaskUpdate,
  setDataInput,
  data,
  setDataTasks,
  dataTasks,
}) => {
  const handleDelete = () => {
    getApiTask.deleteTask(data?._id);
    setDataTasks(dataTasks.filter((item) => item._id !== data._id));
  };
  const handleUpdate = () => {
    setDataInput(data.text);
    setTaskUpdate(data._id);
  };
  return (
    <div className="flex justify-center my-4 flex-col">
      <div className="bg-red-600 text-gray-50 font-semibold mb-2 rounded-md px-2 py-2 min-w-[300px]">
        <span>{data?.text}</span>
      </div>
      <div className="ml-4">
        <button
          onClick={() => handleDelete()}
          className="px-3 py-1 bg-red-600 hover:bg-opacity-75 text-gray-200 mx-2 rounded-md"
        >
          Xóa
        </button>
        <button
          onClick={handleUpdate}
          className="px-3 py-1 bg-red-600 hover:bg-opacity-75 text-gray-200 mx-2 rounded-md"
        >
          Sửa
        </button>
      </div>
    </div>
  );
};

export default Task;
