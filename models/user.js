import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
    },
    image: {
        type: String,
        default: "default_user.png"
    },
    roles: {
        type: [String],
        default: "role_user"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

//Configurar el plugin de paginacion de mongo
UserSchema.plugin(mongoosePaginate);

export default model("User", UserSchema, "users")