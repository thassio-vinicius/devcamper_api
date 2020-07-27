const Bootcamp = require('../models/Bootcamp');


//get all bootcamps - /api/v1/bootcamps/ - public
exports.getBootcamps = async (req, res, next) => {
    try {
      const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps, count: bootcamps.length  });
    } catch (error) {
      res.status(400).json({ success: false, data: error});

    }
  };
  
  //get one bootcamp - /api/v1/bootcamps/:id - public
exports.getBootcamp = async (req, res, next) => {

  try {
    const id = req.params.id;

  

  const bootcamp = await Bootcamp.findById(id);

  if(!bootcamp) return res.status(400).json({success: false, data: error});

    res.status(200).json({ success: true, data: bootcamp});
  } catch (error) {
    res.status(500).json({ success: false, data: error});

  }
  };
  
  //create a new bootcamp - /api/v1/bootcamps/ - private
exports.createBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({ success: true , data: bootcamp});
    } catch (error) {
      res.status(400).json({ success: false, data: error});

    }
  };
  
  //update a bootcamp - /api/v1/bootcamps/:id - private
exports.updateBootcamp = async (req, res, next) => {

  const id = req.params.id;

    const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});

    if(!bootcamp) return res.status(400).send({success: false});

    res.status(200).send({ success: true, data: bootcamp });
  };
  
  //update specific fields of a bootcamp - /api/v1/bootcamps/:id - private
exports.patchBootcamp = async (req, res, next) => {
  //const bootcamp = Bootcamp.findByIdAndUpdate(id)

    res.status(200).send({ success: true });
  };
  
  //delete a bootcamp - /api/v1/bootcamps/:id - private
exports.deleteBootcamp = async (req, res, next) => {

  const id = req.params.id;
  const bootcamp = await Bootcamp.findByIdAndDelete(id);

    res.status(204).send({ success: true, data: {'bootcampDeleted': bootcamp} });
  };
  