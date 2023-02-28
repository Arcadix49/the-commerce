import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productsSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        description: {
            type: String,
           
        },
        images: {
            type:[String],
        },
        quantity:{
            type: Number,
        },
        price: {
            type: Number,   
        }
    }, {
        timestamps: true,
    }
)
export default mongoose.model('Product', productsSchema);