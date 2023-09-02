import TaskModel from "./modelTask.js";

const TaskController = {
  createTask: async (req, res) => {
    try {
      const newTask = new TaskModel({
        text: req.body.text,
        isFinish: req.body.isFinish,
      });
      const saveTask = await newTask.save();
      res.status(201).json({
        status: "successfully",
        data: saveTask,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllTask: async (req, res) => {
    try {
      const allTask = await TaskModel.find();
      if (!allTask) {
        res.status(201).json({
          status: "successfully",
        });
      } else {
        res.status(200).json({
          data: allTask,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  upDateTask: async (req, res) => {
    try {
      const id = req.params.id;
      if (id) {
        await TaskModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(201).json({
          status: "Updated successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteTask: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      if (id) {
        const deleTask = await TaskModel.findOneAndDelete({ _id: id });
        if (deleTask) {
          res.status(200).json({
            status: "Delete successfully",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default TaskController;
