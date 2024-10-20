import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const FollowSchema = Schema({
    following_user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    followed_user: {
        type: Schema.ObjectId,
        ref: "USer",
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }

});

//Definir un indice único para evitar seguir varias veces al mismo usuario
FollowSchema.index({
    following_user: 1,
    followed_user: 1
}, { unique: true });

//configurar el plugin de paginacion
FollowSchema.plugin(mongoosePaginate);

export default model("Follow", FollowSchema, "follows");