import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        products: {
            type: Schema.Types.ObjectId,
            ref: 'Products'
        },

    }, {
        timestamps: true,
    }
)
export default mongoose.model('Cart', cartSchema);