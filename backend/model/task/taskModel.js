import mongoose from 'mongoose';

const taskModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        dueDate: {
            type: String,
            required: [true, "Due Date is required"],
        },
        status: {
            type: Boolean,
            default: false,
        },
        priority: {
            type: Number,
            default: 3
        },
        userID: String,
        userName: String
    },
    { timestamps: true }
);

const Task = mongoose.model("Task", taskModel);
export default Task;
