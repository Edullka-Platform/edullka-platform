import { Schema } from "mongoose";
import { IQuestions } from "./questions-types";

export const QuestionSchema = new Schema<IQuestions>({
  title: {
    type: String,
    required: [true, "Title is required!"]
  },
  description: {
    type: String,
    required: [true, "Description is required!"]
  },
  image: {
    type: String,
    required: [true, "Image is required!"]
  },
  option1: {
    type: String,
    required: [true, "Option1 is required!"]
  },
  option2: {
    type: String,
    required: [true, "Option2 is required!"]
  },
  option3: {
    type: String,
    required: [true, "Option3 is required!"]
  },
  option4: {
    type: String,
    required: [true, "Option4 is required!"]
  }
});