import mongoose from "mongoose";

const catModel = new mongoose.Schema({
cat_name: {
    type: String,
    required: true
},
amount: {
    type: Number,
     required: true
},
type: {
    type: String,
    enum: ["income", "expense", "saving"],
     required: true
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
     required: true
}
},{ timestamps: true })
const Category = mongoose.model("Category", catModel);

export default Category;