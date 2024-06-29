import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [1, "First Name Must Contain At Least 1 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, "Last Name Must Contain At Least 1 Characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [5, "Message Must Contain At Least 5 Characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
