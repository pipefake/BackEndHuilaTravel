import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ReservationSchema = Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    tourist_plans_id: {
        type: Schema.ObjectId,
        ref: "TouristPlans",
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: "default_user.png"
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

//Definir un indice único para evitar tener varios planes al mismo tiempo
ReservationSchema.index({
    tourist_plans_id: 1
}, { unique: true });

//configurar el plugin de paginacion
ReservationSchema.plugin(mongoosePaginate);

export default model("Reservation", ReservationSchema, "reservations");