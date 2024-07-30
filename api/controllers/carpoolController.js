import Carpool from '../models/Carpool.js';
import getCarpoolModel from '../models/Carpool.js';

export const getAllCarpools = async (req, res) => {
  const Carpool = getCarpoolModel(req.carpoolDB);
  try {
    const carpools = await Carpool.find();
    res.json(carpools);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching carpools: ' + err.message });
  }
};


// export const addCarpool = async (req, res) => {
//   const { fromCity, toCity, travelDate, phoneNumber } = req.body;
//   const Carpool = getCarpoolModel(req.carpoolDB);
//   console.log(fromCity);
//   try {
//     const newCarpool = new Carpool({ fromCity, toCity, travelDate, phoneNumber });
//     await newCarpool.save();
//     res.status(201).json({ message: 'Carpool information uploaded successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error uploading carpool information: ' + err.message });
//   }
// };

export const addCarpool = async(req,res)=>{
  const { fromCity, toCity, travelDate, phoneNumber } = req.body;
  const newCarpool = new Carpool({fromCity, toCity, travelDate, phoneNumber});
  try{
    await newCarpool.save();
    res.status(201).json({message: 'Carpool information uploaded successfully'});
  }
  catch(error){
    res.status(500).json({ error: 'Error uploading carpool information: ' + err.message });
  }
}

// export const searchCarpools = async (req, res) => {
//   const { fromCity, toCity, travelDate } = req.query;
//   const Carpool = getCarpoolModel(req.carpoolDB);
//   try {
//     const carpools = await Carpool.find({ fromCity, toCity, travelDate });
//     res.json(carpools);
//   } catch (err) {
//     res.status(500).json({ error: 'Error searching for carpools: ' + err.message });
//   }
// };

export const searchCarpools = async (req, res) =>{
  const { fromCity, toCity, travelDate } = req.query;
  const carpools = await Carpool.find({ fromCity, toCity, travelDate });
  // console.log(carpools);
  try {
    res.json(carpools);
  } catch (error) {
    res.status(500).json({ error: 'Error searching for carpools: ' + err.message });
  }

}