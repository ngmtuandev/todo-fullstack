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
};

export default getApiTask;
