import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String
    },

    }, {
        timestamps: true,
    }
)

userSchema.methods.createJWT = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    }, 'key_secret', {expiresIn: '1h'})
    
}

userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('Cet email est déjà utilisé'));
    } else {
      next(error);
    }
});


export default mongoose.model('User', userSchema)