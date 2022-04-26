import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    stickerPrice : {
        type : Number,
        required : true,
      
    },
    markedPrice : {
        type : Number,
        required : true
    },
    category : {
        type : mongoose.Types.ObjectId,
        ref : "Category"
    },
    image : {
        type : String,
        required : true 
    },
    stock : {
        type : Number,
        required: true
    },
    color : {
        type : String,
        required : true
    },
    compatiableWith : {
        type : String,
        enum : ["iphone", "Mac","Apple Watch", "Airpods"] 
    },
    
}, {
    timestamps : true
});
 
const Product = new mongoose.model("Product", ProductSchema);

export default Product;