
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    category: {type: String},
    author: {type: String},
    image: {type: String, default: ""},    
    date: {type: Date, default: Date.now()}
})

const Blog = mongoose.models.blog ||  mongoose.model("blog", Schema);

export default Blog;