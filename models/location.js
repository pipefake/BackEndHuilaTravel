import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const LocationSchema = Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "defaultCity.png"
    },
    department: {
        type: String,
        required: true
    },
    lat: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    lon: {
        type: mongoose.Types.Decimal128
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

//Configurar plugin de paginacion
LocationSchema.plugin(mongoosePaginate);

export default model("Location", LocationSchema, "locations");

