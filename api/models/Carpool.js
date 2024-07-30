import mongoose from 'mongoose';

const carpoolSchema = new mongoose.Schema({
  fromCity: { type: String, required: true },
  toCity: { type: String, required: true },
  travelDate: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
}, { timestamps: true });


const Carpool = mongoose.model("Carpool", carpoolSchema);

export default Carpool;
