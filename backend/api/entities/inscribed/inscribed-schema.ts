import { Schema } from "mongoose";
import { IInscribed } from "./inscribed-types";

export const InscribedSchema = new Schema<IInscribed>({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  platform: {
    type: String,
    required: [true, "platform is required"]
  }
},{
  timestamps: true
});

