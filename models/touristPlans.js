import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const TouristPlansSchema = Schema({
    location_id: {
        type: Schema.ObjectId,
        ref: "Location",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now

    }
});

TouristPlansSchema.index({
    location_id: 1,
}, { unique: true });

//Configurar plugin de paginacion
TouristPlansSchema.plugin(mongoosePaginate);

export default model("TouristPlans", TouristPlansSchema, "touristPlanss");

