import { Ipost } from "interfaces/postInterface";
import mongoose, { Mongoose } from "mongoose";

const postSchema = new mongoose.Schema({
  userEmail: { type: mongoose.SchemaTypes.String },
  title: {
    type: mongoose.SchemaTypes.String,
    required: [true, "Tile should be there"],
    unique: [true, "The Title of the post should be unique"],
  },
  body: {
    type: mongoose.SchemaTypes.String,
    required: [true, "Body Should be there"],
  },
  images: {
    type: [mongoose.SchemaTypes.String],
    required: [false, "Img url should be there"],
  },
  comments: [{ type: Object }],
  likes: [{ type: Object }],
});

export default mongoose.model("Posts", postSchema);
