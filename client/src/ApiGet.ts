import axios from "axios";
const getApiTask = {
  getAllTask: async () => {
    try {
      const dataTask = await axios.get("http://localhost:5000/api/tasks");
      return dataTask;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTask: async (id: number) => {
    await axios.delete(`http://localhost:5000/api/task/${id}`);
  },
  createTask: async (data: number | string) => {
    await axios.post("http://localhost:5000/api/item", {
      text: data,
      isFinish: false,
    });
  },
  updateData: async (id, data) => {
    await axios.put(`http://localhost:5000/api/task/${id}`, {
      text: data,
      isFinish: false,
    });
  },
};

export default getApiTask;
