import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    isFinish: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
